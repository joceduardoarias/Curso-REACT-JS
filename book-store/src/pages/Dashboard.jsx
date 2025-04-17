import React, { useContext } from 'react'
import { useState } from 'react'
import booksInitial from '../data/BooksInitials'
import Books from '../components/books/Books'
import { Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext'

const Dashboard = () => {

    const navigate = useNavigate();
    const {handleLogOut, isLoggedIn, userLoged } = useContext(UserContext);

    const handleNavigateToNewBook = () => {
        navigate("/agregar-libro")
    };

    return (
        <div>
            <h1>Books!</h1>
            {isLoggedIn && <h2>Bienvenido/a {userLoged.name}</h2>}
            {userLoged.role == "admin" && <Button onClick={handleNavigateToNewBook}>Agregar libro</Button>}
            {isLoggedIn && <Button onClick={handleLogOut}>Cerrar sesión</Button>}
            <Books/>
           
        </div>
    )
}

export default Dashboard