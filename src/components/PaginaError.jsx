import { Container, Card, Button } from "react-bootstrap";
import { BsExclamationTriangle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function PaginaError() {
    const navigate = useNavigate(); // Hook para navegar entre rutas

    return (
        // Contenedor centrado vertical y horizontalmente
        <Container
            className="d-flex justify-content-center align-items-center min-vh-100"
        >
            
            {/* Tarjeta de error */}
            <Card
                className="shadow-lg p-4 text-center border-0"
                style={{
                    maxWidth: 380,
                    width: "100%",
                    borderRadius: "1.5rem",
                    background: "rgba(255,255,255,0.95)",
                }}
            >

                {/* Icono y título */}
                <div className="d-flex flex-column align-items-center mb-3">
                    <BsExclamationTriangle size={70} className="text-danger mb-2" />
                    <Card.Title as="h1" className="mb-2 text-danger fw-bold" style={{ fontSize: "2rem" }}>
                        404 - Página no encontrada
                    </Card.Title>
                </div>

                {/* Mensaje de error */}
                <Card.Text className="mb-4 text-secondary" style={{ fontSize: "1.1rem" }}>
                    Lo sentimos, la página que buscas no existe o ha sido movida.<br />
                    Por favor, verifica la URL o vuelve al inicio.
                </Card.Text>

                {/* Botón para volver al inicio */}
                <Button
                    variant="danger"
                    size="lg"
                    className="px-4 fw-bold"
                    onClick={() => navigate("/")}
                >
                    Volver al inicio
                </Button>
            </Card>
        </Container>
    );
}

export default PaginaError;