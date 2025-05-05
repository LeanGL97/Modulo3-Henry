import styles from "./Contact.module.css"
import Logo from "../../assets/Logo.png"

const Contact = () => {
    return(
        <div className={styles.contact}>
        <img src={Logo} alt="Logo" className={styles.logo}/>
        <h1>CONTÁCTENOS</h1>
        <h2 className={styles.text}>En caso de tener problemas para gestionar su turno, puede comunicarse a nuestro teléfono</h2>
        <p>1122334455</p>
        <h2 className={styles.text}>También puede acercarse a nuestro local yendo a la siguiente dirección:</h2>
        <p>Calle falsa como los títulos amateurs de racing 146, Lomas de Zamora.</p>

        </div>
    );
};

export default Contact;