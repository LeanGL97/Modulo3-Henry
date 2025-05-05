import styles from "./Us.module.css"
import image1 from "../../assets/EP/EP1.avif"
import image2 from "../../assets/EP/EP2.jpg"
import image3 from "../../assets/EP/EP3.jpg"
import image4 from "../../assets/EP/EP4.jpg"
import image5 from "../../assets/EP/EP5.jpg"
import image6 from "../../assets/EP/EP6.jpg"

const Us = () =>{
    return (
        <section id="us" className={styles.description}>
        <p className={styles.textDescription}>Con mas de 25 años de trayectoria en el ámbito de estética capilar,nos dedicamos a ofrecerte los mejores servicios de
        peluquería, asegurándonos de que cada visita sea una experiencia única.
        Nuestro equipo de expertos está siempre actualizado con las últimas tendencias. Asi que ya sabes, reserva tu turno y vení a encontrar tu corte de pelo ideal. Nos encontramos en Lomas de Zamora, Buenos Aires.</p>
        <div className={styles.imagesGallery}>
        <img src={image1} alt="Imagen 1" className={styles.images}/>
        <img src={image2} alt="Imagen 2" className={styles.images}/>
        <img src={image3} alt="Imagen 3" className={styles.images}/>
        <img src={image4} alt="Imagen 4" className={styles.images}/>
        <img src={image5} alt="Imagen 5" className={styles.images}/>
        <img src={image6} alt="Imagen 6" className={styles.images}/>
        </div>
        
        <div className={styles.usInteraction}>
            <div className={styles.servicesSection}>
                <h1 className={styles.title}>¿Que servicios ofrecemos?</h1>
            <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>Corte de cabello</li>
            <li className={styles.serviceItem}>Lavado y acondicionamiento</li>
            <li className={styles.serviceItem}>Peinado</li>
            <li className={styles.serviceItem}>Coloración</li>
            <li className={styles.serviceItem}>Alisado</li>
            <li className={styles.serviceItem}>Tratamientos capilares</li>
            </ul>
            </div>
        </div>
        </section>
    )
}

export default Us;