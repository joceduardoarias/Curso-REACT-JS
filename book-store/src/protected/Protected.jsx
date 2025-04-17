import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate, Outlet } from "react-router";

const Protected = () => {
    const { isLoggedIn, userLoged } = useContext(UserContext);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default Protected;
