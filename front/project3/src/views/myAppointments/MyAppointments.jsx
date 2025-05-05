import { useContext, useEffect, useState } from "react";
import styles from "./MyAppointments.module.css";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
    const { user, setUserAppointments } = useContext(UserContext);
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        } else {
            axios.get(`http://localhost:3001/users/${user.id}`)
                .then((response) => {
                    const userAppointments = response.data.appointments || [];
                    const sortedAppointments = userAppointments.sort((a, b) => {
                        if (a.status === 'active' && b.status !== 'active') return -1;
                        if (a.status !== 'active' && b.status === 'active') return 1;
                        return 0;
                    });
                    setUserAppointments(sortedAppointments);
                    setAppointments(sortedAppointments);
                })
                .catch((err) => {
                    setError("Error al obtener los turnos.");
                    console.error("Error al obtener los turnos:", err);
                });
        }
    }, [user, navigate]);

    const cancelAppointment = async (appointmentId) => {
        axios.delete(`http://localhost:3001/appointments/${appointmentId}`)
            .then(() => {
                setAppointments((prevAppointments) =>
                    prevAppointments.filter(appointment => appointment.id !== appointmentId)
                );
                setSuccessMessage("Turno cancelado exitosamente.");
            })
            .catch((err) => {
                setError("Error al cancelar el turno.");
                console.error("Error al cancelar el turno:", err);
            });
    };

    const createAppointment = () => {
        navigate("/createAppointment");
    };

    return (
        <>
            <div id="appointments" className={styles.text}>
                <h1>Mis Turnos</h1>
                <h3>Estos son los turnos del usuario</h3>
            </div>

            <button className={styles.createButton} onClick={createAppointment}>
                Crear nuevo turno
            </button>

            <div className={styles.res}>
                {error && <p style={{ color: "red", fontSize: "25px" }}>{error}</p>}
                {successMessage && <p style={{ color: "green", fontSize: "25px" }}>{successMessage}</p>}
            </div>

            <div className={styles.cardContainer}>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <div className={styles.card} key={appointment.id}>
                            <Appointment
                                date={appointment.date}
                                time={appointment.time}
                                status={appointment.status}
                                userId={appointment.userId}
                                onCancel={() => cancelAppointment(appointment.id)}
                            />
                        </div>
                    ))
                ) : (
                    <p className={styles.text}>No tienes turnos agendados.</p>
                )}
            </div>
        </>
    );
};

export default MyAppointments;
