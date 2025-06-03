import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

function BarraNavegacion() {
    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Container fluid className="d-flex justify-content-between align-items-center"> 
                    <Navbar.Brand as={Link} to="/" className="navbar-brand">
                        Menu
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/nuevo-alumno" className="nav-link">Nuevo Alumno</Nav.Link>
                            <Nav.Link as={Link} to="/lista-alumnos" className="nav-link">Lista Alumnos</Nav.Link>
                            <Nav.Link as={Link} to="/acerca-de" className="nav-link">Acerca De</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet />
            </section>
        </div>
    );
}

export default BarraNavegacion;