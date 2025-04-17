import { Button, Card, Col, Form, Row, ToastContainer } from "react-bootstrap";
import { use, useState } from "react";
import { Navigate, useNavigate } from 'react-router'
import { usePost } from "../../hooks/usePost";
import { errorToast, successToast } from "../../ui/toast/Toast";
import { useForm } from "react-hook-form";

const NewBook = ({ onBookAdded }) => {

    const navigate = useNavigate();
    const [PostData, error] = usePost({ consulta: "Book" })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleBackToDashboard = () => {
        navigate("/")
    }
    const onSubmit = async (data) => {

        const bookData = {
            title: data.title,
            description: data.description,
            author: data.author,
            price: parseInt(data.rating, 10),
            stock: parseInt(data.pageCount, 10),
            imageUrl: data.imageUrl
        }

        try {
            await PostData(bookData);
            successToast("Libro agregado correctamente")
            reset();
        } catch (error) {
            console.error("Error al agregar el libro:", error);
            errorToast(error)
        }
    }

    return (

        <div className="container d-flex justify-content-center flex-wrap">
            <Card className="m-4 w-50" bg="success">
                <Card.Body>
                    <Form className="text-white" onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar título"
                                        {...register("title", { required: "El título es obligatorio" })} />
                                        {errors.title && <p className="text-warning">{errors.title.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="author">
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar autor"
                                        {...register("author", { required: "El autor es obligatorio" })} />
                                        {errors.author && <p className="text-warning">{errors.author.message}</p>}
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
                                        {...register("rating", {
                                            required: "La puntuación es obligatoria",
                                            min: { value: 0, message: "La puntuación mínima es 0" }
                                        },)}
                                    />
                                    {errors.rating && <p className="text-warning">{errors.rating.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="pageCount">
                                    <Form.Label>Cantidad de páginas</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresar cantidad de páginas"
                                        {...register("pageCount", {
                                            required: "La cantidad de páginas es obligatoria",
                                            min: { value: 0, message: "La cantidad mínima de páginas es 0" }
                                        },)}
                                    />
                                    {errors.pageCount && <p className="text-warning">{errors.pageCount.message}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Form.Group className="mb-3" controlId="imageUrl">
                                <Form.Label>URL de imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar url de imagen"
                                />
                            </Form.Group>
                        </Row>
                        <Row className="justify-content-end">
                            <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                                <Form.Check
                                    type="switch"
                                    id="available"
                                    className="mb-3"
                                    label="¿Disponible?"

                                />
                                <Button variant="primary" type="submit">
                                    Agregar lectura
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
};


export default NewBook;