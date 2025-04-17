import React, { useRef, useContext } from 'react'
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from '../../hooks/useAuth';
import { UserContext } from '../../context/UserContext';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [PostData, loading, error] = useAuth({ consulta: "Authentication/authenticate" });
    const { handleUser, setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: false });
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: false });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!emailRef.current.value.length) {
            setErrors({ ...errors, email: true });
            alert("El email es requerido");
            emailRef.current.focus();
            return;
        }
        if (!password || password.length < 7) {
            setErrors({ ...errors, password: true });
            passwordRef.current.focus();
            return;
        }
    
        const userData = { email, password };
    
        try {
            const responseData = await PostData(userData);
    
            if (responseData?.token) {
                const token = responseData.token;
                Cookies.set("token", token, { expires: 7 });
    
                const decoded = jwtDecode(token);
    
                handleUser({
                    id: decoded.sub,
                    role: decoded.role,
                    name: decoded.given_name,
                    email: decoded.email || decoded.given_name
                });
    
                setIsLoggedIn(true);
                setEmail("");
                setPassword("");
                navigate("/");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

  return (
    <div className='justify-content-center w-50 justify-content-center mx-auto mt-5'>
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos/as!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            ref={emailRef}
                            required
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email} 
                            className={errors.email  && " border border-danger"}
                            />
                            {errors.email && <p className="text-danger">El email es requerido</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            ref={passwordRef}
                            required
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                            className={errors.password  && " border border-danger"}
                        />
                        <div className='container'>{errors.password && <p className="text-danger">La contraseña debe tener al menos 7 caracteres</p>}</div>
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={12} className="d-flex justify-content-end ">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Login