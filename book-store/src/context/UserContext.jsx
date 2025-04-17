import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userLoged, setUserLoged] = useState({
        id: '',
        role: '',
        name: '',
        email: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserLoged({
                    id: decoded.sub,
                    role: decoded.role,
                    name: decoded.given_name,
                    email: decoded.email || decoded.given_name
                });
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                handleLogOut();
            }
        } else {
            setUserLoged({ id: '', role: '', name: '', email: '' });
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);  

    const handleLogOut = () => {
        Cookies.remove("token");
        setIsLoggedIn(false);
        setUserLoged({ id: '', role: '', name: '', email: '' });
    };

    const handleUser = (data) => {
        setUserLoged({
            id: data.sub,
            role: data.role,
            name: data.given_name,
            email: data.email || data.given_name
        });
        setIsLoggedIn(true);
    };

    return (
        <UserContext.Provider value={{ userLoged, handleUser, handleLogOut, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
