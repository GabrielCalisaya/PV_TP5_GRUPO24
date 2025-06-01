import { Container, Card, Row, Col, Carousel, Badge } from "react-bootstrap";
import "../styles/style.css";

// Datos de los participantes
const participantes = [
    {
        nombre: "Calisaya Gabriel",
        github: "GabrielCalisaya",
        url: "https://github.com/GabrielCalisaya",
        img: "https://github.com/GabrielCalisaya.png",
    },
    {
        nombre: "Juan Carrizo",
        github: "JuanCarrizo9",
        url: "https://github.com/JuanCarrizo9",
        img: "https://github.com/JuanCarrizo9.png",
    },
    {
        nombre: "Juan Sebastian",
        github: "Juansebaca",
        url: "https://github.com/Juansebaca",
        img: "https://github.com/Juansebaca.png",
    },
    {
        nombre: "Natali Suarez",
        github: "natalicmk",
        url: "https://github.com/natalicmk",
        img: "https://github.com/natalicmk.png",
    },
    {
        nombre: "Fernando Romero",
        github: "Android",
        url: "https://github.com/TuAndroide",
        img: "https://github.com/TuAndroide.png",
    },
];

function AcercaDe() {
    return (
        <Container className="AcercaDe-container py-4">
            
            {/* Tarjeta de descripción del proyecto */}
            <Card className="mb-4 shadow">
                <Card.Body>
                    <Card.Title as="h1" className="mb-3 text-primary fw-bold">
                        Acerca del Proyecto
                    </Card.Title>
                    <Card.Subtitle as="h2" className="mb-3 text-secondary fs-4">
                        Descripción del Proyecto
                    </Card.Subtitle>
                    <Card.Text>
                        Esta aplicación web permite la gestión de alumnos: cargar alumnos, listar, editar y eliminar registros. El objetivo es ofrecer una herramienta sencilla y eficiente para administrar datos de estudiantes, utilizando una interfaz amigable y moderna.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Row className="mb-4">

                {/* Tarjeta de tecnologías */}
                <Col md={6}>
                    <Card className="h-100 shadow">
                        <Card.Body>
                            <Card.Title as="h2" className="mb-3 text-success fs-4">
                                Tecnologías Utilizadas
                            </Card.Title>
                            <ul className="mb-0">
                                <li>React</li>
                                <li>React Router DOM</li>
                                <li>React Bootstrap</li>
                                <li>React Icons</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>HTML5 &amp; CSS3</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Tarjeta de participantes con carousel */}
                <Col md={6}>
                    <Card className="h-100 shadow">
                        <Card.Body>
                            <Card.Title as="h2" className="mb-3 text-info fs-4">
                                Participantes
                            </Card.Title>
                            <div style={{ position: "relative" }}>

                                {/* Carousel de participantes */}
                                <Carousel interval={3500} indicators={false} pause={false} className="mb-2 carousel-black-arrows">
                                    {participantes.map((p) => (
                                        <Carousel.Item key={p.github}>
                                            <div className="d-flex flex-column align-items-center">
                                                <img
                                                    src={p.img}
                                                    alt={p.nombre}
                                                    className="rounded-circle mb-3"
                                                    style={{ width: 120, height: 120, objectFit: "cover", border: "4px solid #0d6efd" }}
                                                />
                                                <h5 className="mb-1">{p.nombre}</h5>
                                                <a
                                                    href={p.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mb-2"
                                                    style={{ textDecoration: "none" }}
                                                >
                                                    <Badge bg="dark">
                                                        @{p.github}
                                                    </Badge>
                                                </a>
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Tarjeta de agradecimiento */}
            <Card className="mt-4 shadow border-info">
                <Card.Body>
                    <Card.Title as="h1" className="text-info fw-bold mb-3 text-center">
                        <strong>¡Gracias por visitar nuestro proyecto!</strong>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AcercaDe;