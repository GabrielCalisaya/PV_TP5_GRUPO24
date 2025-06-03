import { Container, Card, ListGroup, Button, Row, Col, Alert } from "react-bootstrap";
import { BsPersonPlusFill, BsInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Inicio() {
    const navigate = useNavigate(); // Hook para navegación

return (
        // Contenedor principal centrado y con fondo
        <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"

        >
        <Row className="w-100 justify-content-center">
                <Col xs={12} md={8} lg={6}>

                    {/* Tarjeta principal */}
                <Card className="shadow-lg p-4">
                        {/* Icono y título */}
                        <div className="d-flex flex-column align-items-center mb-3">
                        <BsPersonPlusFill size={72} className="text-primary mb-3" />
                        <Card.Title as="h1" className="mb-2 text-center text-primary fw-bold">
                                Bienvenido al Sistema de Gestión de Alumnos
                        </Card.Title>
                        </div>

                        {/* Descripción */}
                        <Card.Text className="mb-4 text-center text-secondary fs-5">
                        Gestiona tus alumnos de manera sencilla.
                        </Card.Text>

                        {/* Lista de funcionalidades */}
                        <ListGroup variant="flush" className="mb-4">
                        <ListGroup.Item>
                                <strong className="text-success me-2">✔</strong> Agrega alumnos
                        </ListGroup.Item>
                        <ListGroup.Item>
                                <strong className="text-success me-2">✔</strong> Consulta alumnos
                        </ListGroup.Item>
                        <ListGroup.Item>
                                <strong className="text-success me-2">✔</strong> Edita alumnos
                        </ListGroup.Item>
                        <ListGroup.Item>
                                <strong className="text-success me-2">✔</strong> Elimina alumnos
                        </ListGroup.Item>
                        </ListGroup>

                        {/* Botón para comenzar */}
                        <div className="d-flex flex-column align-items-center">
                        <Button
                                variant="primary"
                                size="lg"
                                className="mb-2 px-5"
                                onClick={() => navigate("/nuevo-alumno")}
                        >
                                Comenzar
                        </Button>
                        </div>

                        {/* Alerta de ayuda */}
                        <Alert variant="info" className="mt-4 d-flex align-items-center justify-content-center">
                        <BsInfoCircleFill className="me-2" />
                        ¿Necesitas ayuda? Consulta a soporte.
                        </Alert>

                        {/* Pie de página */}
                        <Card.Footer className="bg-transparent border-0 mt-2 text-center">
                        <span className="text-secondary" style={{ fontSize: "0.95rem" }}>
                                Grupo 24 &copy; 2025
                        </span>
                        </Card.Footer>
                </Card>
                </Col>
        </Row>
        </Container>
);
}

export default Inicio;