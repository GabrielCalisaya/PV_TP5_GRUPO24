import { Container } from "react-bootstrap";
import "../styles/style.css";

function AcercaDe() {
    return (
        <Container className="AcercaDe-container">
            <h1>Acerca del Proyecto</h1>
            <h2>Descripción del Proyecto</h2>
            <p>
                Este proyecto es una aplicación web para la gestión de alumnos. Permite cargar nuevos alumnos, listar todos los registros, editar la información existente y eliminar alumnos del sistema.
                El objetivo es ofrecer una herramienta sencilla y eficiente para administrar datos de estudiantes, utilizando una interfaz amigable y moderna.
            </p>
            <p>
                Navega por las diferentes secciones usando el menú superior para acceder a todas las funcionalidades.
            </p>
            <h2>Tecnologías Utilizadas</h2>
            <ul>
                <li>React</li>
                <li>React Router DOM</li>
                <li>React Bootstrap</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>HTML5 &amp; CSS3</li>
            </ul>
            <h2>Participantes</h2>
            <ul>
                <li>Calisaya Gabriel (<a href="https://github.com/GabrielCalisaya" target="_blank" rel="noopener noreferrer">GabrielCalisaya</a>)</li>
                <li>Juan Carrizo (<a href="https://github.com/JuanCarrizo9" target="_blank" rel="noopener noreferrer">JuanCarrizo9</a>)</li>
                <li>Juan Sebastian (<a href="https://github.com/Juansebaca" target="_blank" rel="noopener noreferrer">Juansebaca</a>)</li>
                <li>Natali Suarez (<a href="https://github.com/natalicmk" target="_blank" rel="noopener noreferrer">natalicmk</a>)</li>
                <li>Fernando Romero (<a href="https://github.com/TuAndroide" target="_blank" rel="noopener noreferrer">Android</a>)</li>
            </ul>

        </Container>
    );
}
export default AcercaDe;