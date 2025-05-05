import { createContext, useState } from "react";


export const UserContext = createContext ({
    user: null,
    setUser: () => {},
    userAppointments: [],
    setUserAppointments: () => {},
    logoutUser: () => {}
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);

    const logoutUser = () => {
        setUser(null);
        setUserAppointments([]);
    }

    const value = {
        user,
        setUser,
        userAppointments,
        setUserAppointments,
        logoutUser
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
};