import axios from "axios";
import { useState } from "react";
import styles from "./Register.module.css"
import { validateName, validateEmail, validateAge, validateDni, validatePassword} from "../../helpers/registerValidators";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        password: "",
    });

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });

        const newErrors = { ...errors };

        if (name === "name") newErrors.name = validateName(value);
        if (name === "email") newErrors.email = validateEmail(value);
        if (name === "birthdate") newErrors.birthdate = validateAge(value);
        if (name === "nDni") newErrors.nDni = validateDni(value);
        if (name === "password") newErrors.password = validatePassword(value);

        setErrors(newErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (!form.name || !form.email || !form.birthdate || !form.nDni || !form.password) {
            setError("Todos los campos son OBLIGATORIOS.");
            return;
        }

        if (Object.values(errors).some((error) => error !== "")) {
            setError("Por favor, corrige los errores antes de continuar.");
            return;
        }

        functionRequest();
    }

    const functionRequest = async () => {
        axios.post("http://localhost:3001/users/register", form).then((response) => {
            setSuccess("Registro Exitoso. ¡Bienvenido/a a La Manada!");
        }).catch((error) => {
            setError("Ocurrió un error. Inténtalo de nuevo.");
        })
    };

    return (
        <div>
            <div>
            <Link className={styles.link} to="/">Volver al inicio</Link>
            </div>
        <form className={styles.formRegister} onSubmit={handleSubmit}>
            <h1>Registrarse</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <div>
                <label>Nombre Completo</label>
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    placeholder="Nombre y Apellido"
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={form.email}
                    name="email"
                    placeholder="Ejemplo@mail.com"
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label>Fecha de nacimiento</label>
                <input
                    type="date"
                    value={form.birthdate}
                    name="birthdate"
                    placeholder=""
                    onChange={handleChange}
                />
                {errors.birthdate && <p style={{ color: "red" }}>{errors.birthdate}</p>}
            </div>

            <div>
                <label>Nº DNI</label>
                <input
                    type="number"
                    value={form.nDni}
                    name="nDni"
                    placeholder="12345678"
                    onChange={handleChange}
                />
                 {errors.nDni && <p style={{ color: "red" }}>{errors.nDni}</p>}
            </div>

            <div>
                <label>Contraseña</label>
                <input
                    type="password"
                    value={form.password}
                    name="password"
                    placeholder="Debe contener al menos 6 caracteres"
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <button type="submit">Registrarse</button>
        </form>
        </div>
    )

}

export default Register;