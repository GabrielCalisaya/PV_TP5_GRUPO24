import { Container } from "react-bootstrap";
import "../styles/style.css";
function Home() {
return (  
<Container className="home-container">
        <h1>Bienvenido al Sistema de Gestión de Alumnos</h1>
        <p>
        Este proyecto te permite cargar, listar, editar y eliminar alumnos de manera sencilla y eficiente.<br />
        Utiliza el menú superior para navegar entre las diferentes funcionalidades:<br />
        <strong>•</strong> Agrega nuevos alumnos<br />
        <strong>•</strong> Consulta la lista completa<br />
        <strong>•</strong> Edita la información existente mediante botones en la lista de alumno<br />
        <strong>•</strong> Elimina registros de la lista de alumnos con una confirmacion anterior<br /><br />
        ¡Comienza a gestionar tus alumnos de forma rápida y organizada!
        </p>
</Container>
);
}
export default Home;