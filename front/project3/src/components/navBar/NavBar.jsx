import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const NavBar = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(UserContext);

    const handleUsClick = () => {
      navigate("/");
      setTimeout(() => {
        const usSection = document.getElementById("us");
        if (usSection) usSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };

    const handleLogout = () => {
      logoutUser();
      navigate("/login");
  };

    return (
        <nav className={styles.navBar}>
           <div className={styles.navBarList}> 
                <Link className={styles.navBarItem} to="/">Inicio</Link>
                <button className={styles.navBarItem} onClick={handleUsClick}>Nosotros</button>
                {user ? (
                    <Link className={styles.navBarItem} to="/myAppointments">Mis Turnos</Link>
                ) : (
                    <button className={styles.navBarItem} disabled>Mis Turnos</button>
                )}
                <Link className={styles.navBarItem} to="/contact">Contacto</Link>
                </div>

            <div className={styles.loginBox}>
            {user ? (
                    <button className={styles.loginText} onClick={handleLogout}>Cerrar Sesión</button>
                ) : (
                    <>
                        <Link className={styles.loginText} to="/register">Registrarse /</Link>
                        <Link className={styles.loginText} to="/login">Iniciar Sesión</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;