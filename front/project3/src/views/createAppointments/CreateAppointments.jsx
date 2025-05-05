import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import styles from "./CreateAppointments.module.css";
import { validateDate, validateTime } from "../../helpers/createAppointmentsValidators";


const CreateAppointment = () => {
    const { user } = useContext(UserContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleDateChange = (e) => {
        setDate(e.target.value);
        const dateError = validateDate(e.target.value);
        setError(dateError);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
        const timeError = validateTime(e.target.value);
        setError(timeError);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date || !time) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        const appointmentData = {
            date,
            time,
            userId: user.id,
            status: "active",
        };

        axios.post("http://localhost:3001/appointments/schedule", appointmentData)
            .then((response) => {
                setSuccessMessage("Turno creado exitosamente.");
                setError("");
                navigate("/myAppointments");
            })
            .catch((err) => {
                setError("Error al crear el turno.");
                console.error("Error al crear el turno:", err);
            });
    };

    return (
        <div>
            <div>
                <Link className={styles.link} to="/">Volver al inicio</Link>
            </div>

            <form className={styles.formCreate} onSubmit={handleSubmit}>
                <h1>Crear nuevo turno</h1>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

                <div>
                    <label>Fecha:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                <div>
                    <label>Hora:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={handleTimeChange}
                        required
                    />
                </div>

                <button type="submit">Crear turno</button>
            </form>
        </div>
    );
};

export default CreateAppointment;

