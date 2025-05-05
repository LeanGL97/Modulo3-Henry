import styles from "./GuestInteraction.module.css"
import { Link } from "react-router-dom";

const GuestInteraction = () => {
    return(
        <div className={styles.guestInteraction}>
            <h1 className={styles.title}>¿ Que estas esperando ?</h1>
            <p className={styles.text}>Sé parte de nuestra manada alfa. Regístrate haciendo click <Link className={styles.link} to="register">aquí</Link> y reserva tu turno.</p>
        </div>
    )
};

export default GuestInteraction;