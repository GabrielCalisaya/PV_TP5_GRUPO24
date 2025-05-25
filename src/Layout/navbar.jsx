import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

function NavbarExample() {
return (
    <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand>Menu</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/lista-alumno">Lista Alumnos</Nav.Link>
            <Nav.Link as={Link} to="/nuevo-alumno">Nuevo Alumno</Nav.Link>
            <Nav.Link as={Link} to="/about">Acerca De</Nav.Link>
        </Nav>
        </Container>
    </Navbar>


    <section>
        <Outlet />
    </section>
    </div>
    
);
}

export default NavbarExample;