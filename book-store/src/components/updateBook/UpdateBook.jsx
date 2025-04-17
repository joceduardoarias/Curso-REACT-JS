import React from 'react'
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router'
import { successToast } from "../../ui/toast/Toast";
import { useUpdate } from "../../hooks/useUpdate";
import { useLocation } from "react-router";
const UpdateBook = () => {
    
    const { state } = useLocation();    
    const { bookData } = state;
    const navigate = useNavigate();
    const [UpdateData, error] = useUpdate({ consulta: "Book" }) 

    const [title, setTitle] = useState(bookData.title);
    const [author, setAuthor] = useState(bookData.author);
    const [rating, setRating] = useState(bookData.price);
    const [pageCount, setPageCount] = useState(bookData.stock);
    const [imageUrl, setImageUrl] = useState(bookData.imageUrl);

    const handleBackToDashboard = () => {
        navigate("/")
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    };

    const handleChangePageCount = (event) => {
        setPageCount(event.target.value);
    };

    const handleChangeImageUrl = (event) => {
        setImageUrl(event.target.value);
    };

    // const handleChangeAvailability = (event) => {
    //     setAvailable(event.target.checked);
    // };

    const handleUpdateBook = async (event) => {
        event.preventDefault();

        const bookData = {
            title: title,
            description: "Descripción actualizada",
            author: author,
            price: parseInt(rating, 10),
            stock: parseInt(pageCount, 10),
            imageUrl: imageUrl
        };

        const resposne = await UpdateData(bookData);
        if (resposne) {
            successToast(resposne.message);
        }

        setTitle('');
        setAuthor('');
        setRating("");
        setPageCount("");
        setImageUrl('');
        // setAvailable(false);

    };

    return (

        <div className="container d-flex justify-content-center flex-wrap">
            <Card className="m-4 w-50" bg="success">
                <Card.Body>
                    <Form className="text-white" onSubmit={handleUpdateBook}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar título"
                                        onChange={handleChangeTitle}
                                        value={title} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="author">
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar autor"
                                        onChange={handleChangeAuthor}
                                        value={author} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="rating">
                                    <Form.Label>Puntuación</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresar cantidad de estrellas"
                                        max={5}
                                        min={0}
                                        onChange={handleChangeRating}
                                        value={rating}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="pageCount">
                                    <Form.Label>Cantidad de páginas</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresar cantidad de páginas"
                                        min={1}
                                        onChange={handleChangePageCount}
                                        value={pageCount}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Form.Group className="mb-3" controlId="imageUrl">
                                <Form.Label>URL de imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar url de imagen"
                                    onChange={handleChangeImageUrl}
                                    value={imageUrl} />
                            </Form.Group>
                        </Row>
                        <Row className="justify-content-end">
                            <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                                {/* <Form.Check
                                    type="switch"
                                    id="available"
                                    className="mb-3"
                                    label="¿Disponible?"
                                    onChange={handleChangeAvailability}
                                    value={available}
                                /> */}
                                <Button variant="primary" type="submit">
                                    Actualizar
                                </Button>
                                <br></br>
                                <Button variant="secondary" onClick={handleBackToDashboard}>Volver</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UpdateBook