import { Container } from "react-bootstrap";
import "../styles/style.css"; 
function ErrorPage() {
return (
    <Container className="error-page">
    <h1>404 - Pagina no encontrada</h1>
    <p>Perdon, esta pagina no existe</p>
    </Container>
);
}
export default ErrorPage;