import Logo from "../../assets/Logo.png"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="Logo" className={styles.logo}/>
            <h1 className={styles.title}>Bienvenidos a <br /><span className={styles.titleName}>Alpha Wolf Hair Salon</span></h1>
            <h3 className={styles.subtitle}>'Hacemos la diferencia'</h3>
        </div>
        
    )
}

export default Header;