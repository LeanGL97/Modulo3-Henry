import styles from "./Appointments.module.css"

const Appointment = ({ date, time, userId, status, onCancel }) => {
    const statusClass = status === 'active' ? 'active' : (status === 'cancelled' ? 'cancelled' : '');

    return (
        <div>
            <h4>Turno de usuario N º : {userId}</h4>
            <h4>Fecha: {date}</h4>
            <h4>Hora: {time}</h4>
            <h4>Estado del turno: <span className={statusClass}>{status}</span></h4>
            {status !== 'cancelled' && (
                <button className={styles.cancelButton} onClick={onCancel}>Cancelar Turno</button>
            )}
        </div>
    );
};

export default Appointment;
