import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/style.css";

function ListaAlumnos({ alumnos, onEliminarAlumno, onDetallesAlumno, alumnosEliminados }) {
    const navigate = useNavigate();
    const [buttonOpen, setButtonOpen] = useState(false);

    const navegarAEditar = (id) => {
        navigate(`/editar-alumno/${id}`);
    };

    return (
        <Container className="container-alumnos mt-4">
            {alumnos.length === 0 ? (
                <p className="text-center">No hay alumnos registrados aún.</p>
            ) : (
                <div className="lista-alumnos">
                    {alumnos.map((alumno) => (
                        <div key={alumno.id} className="alumno-card">
                            <h4>{alumno.nombre} {alumno.apellido}</h4>
                            <p><span>ID: </span>{alumno.id}</p>
                            <div className="d-flex justify-content-end mt-3">
                                <button
                                    className="btn btn-sm btn-info me-2"
                                    onClick={() => {
                                        onDetallesAlumno(alumno);
                                        navigate("/detalles-alumno");
                                    }}
                                >
                                    Detalles
                                </button>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => navegarAEditar(alumno.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => onEliminarAlumno(alumno.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {alumnosEliminados?.length > 0 && (
                <Button onClick={() => setButtonOpen(!buttonOpen)} variant="info" className="mt-4">
                    {buttonOpen ? "Cerrar lista" : "Mostrar Alumnos eliminados"}
                </Button>
            )}

            {buttonOpen && alumnosEliminados.length > 0 && (
                <div className="mt-4">
                    <h2>Alumnos Eliminados</h2>
                    <ul className="list-group">
                        {alumnosEliminados.map((alumno) => (
                            <li key={alumno.id} className="list-group-item">
                                {alumno.nombre} {alumno.apellido} (LU: {alumno.lu})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
}

export default ListaAlumnos;