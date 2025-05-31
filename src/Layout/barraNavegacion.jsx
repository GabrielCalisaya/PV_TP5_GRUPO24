import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

function barraNavegacion() {

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand style={{ color: "var(--celeste)", fontFamily: "'Orbitron', sans-serif" }}>
                        Menu
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/lista-alumnos">Lista Alumnos</Nav.Link>
                        <Nav.Link as={Link} to="/nuevo-alumno">Nuevo Alumno</Nav.Link>
                        <Nav.Link as={Link} to="/acerca-de">Acerca De</Nav.Link>
                   
                    </Nav>
                </Container>
            </Navbar>



            <section>
                <Outlet />
            </section>
        </div>

    );
}

export default barraNavegacion;