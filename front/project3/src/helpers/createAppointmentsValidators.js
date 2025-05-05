export const validateDate = (date) => {
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
        return "La fecha debe ser igual o posterior a la fecha actual.";
    }
    return "";
};

export const validateTime = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    if (hour < 8 || hour >= 20) {
        return "El turno debe estar entre las 08:00 y las 20:00.";
    }
    if (minute !== 0 && minute !== 30) {
        return "El turno debe ser a una hora exacta o a la media hora.";
    }

    return "";
};
