import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () =>{
    navigate("/login")
  };

  return (
    <div>
        <h2>Ups..! La página que estas buscando no fue encontrada</h2>
        <Button variant="primary" onClick={handleBackToLogin}>Volver al inicio</Button>
    </div>
  )
}

export default NotFound