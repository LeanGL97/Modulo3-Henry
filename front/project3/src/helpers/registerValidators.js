export const validateName = (value) => {
    return /^[a-zA-Z\s]+$/.test(value) ? "" : "El nombre solo puede contener letras y espacios.";
};

export const validateEmail = (value) => {
    return /\S+@\S+\.\S+/.test(value) ? "" : "El formato del correo es inválido.";
};

export const validateDni = (value) => {
    return /^\d{7,8}$/.test(value) ? "" : "El DNI debe tener entre 7 y 8 dígitos.";
};

export const validatePassword = (value) =>{
    return /^.{6,}$/.test(value) ? "" : "La contraseña debe contener al menos 6 caracteres.";
};

export const validateAge = (value) => {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 15;
    const regex = new RegExp(`^((19[0-9]{2}|20[0-${minYear.toString()[2]}][0-9]|${minYear})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))$`);

    if (!regex.test(value)) {
        return "Debes tener al menos 15 años.";
    }

    return "";
};