import { useContext, useState } from "react";
import styles from "./Login.module.css"
import axios from "axios";
import { validateEmail, validatePassword } from "../../helpers/registerValidators";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Login = () => {
    const { setUser } = useContext(UserContext);

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });

        const newErrors = { ...errors };

        if (name === "username") newErrors.username = validateEmail(value);
        if (name === "password") newErrors.password = validatePassword(value);

        setErrors(newErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (!form.username || !form.password) {
            setError("Todos los campos son OBLIGATORIOS.");
            return;
        }

        functionRequest();
    }

    const functionRequest = async () => {
        setIsSubmitting(true);
        axios.post("http://localhost:3001/users/login", form).then((response) => {
            setSuccess("Has iniciado sesión correctamente. ¡Bienvenido/a!");
            setUser({
                username: form.username,
                id: response.data.id,
            });
        }).catch((error) => {
            setError("Usuario o contraseña incorrectos. Por favor, intenta nuevamente.");
        }).finally(() => {
            setIsSubmitting(false);
        });
    }
    return (
        <div>
            <div>
                <Link className={styles.link} to="/">Volver al inicio</Link>
            </div>
            <form className={styles.formLogin} onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>

                {error && <p style={{ color: "red", fontSize: "25px" }}>{error}</p>}
                {success && <p style={{ color: "green", fontSize: "25px" }}>{success}</p>}

                <div>
                    <label>Usuario</label>
                    <input
                        type="email"
                        value={form.username}
                        name="username"
                        placeholder="Ejemplo@mail.com"
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={form.password}
                        name="password"
                        placeholder="⬤⬤⬤⬤⬤⬤"
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}>Ingresar</button>

            </form>
        </div>
    )
}

export default Login;