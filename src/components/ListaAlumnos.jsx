import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/style.css"; 

function ListaAlumnos({ alumnos, onEliminarAlumno, onDetallesAlumno, onEditarAlumno, alumnosEliminados }) {
    const navigate = useNavigate();
    const [buttonOpen, setButtonOpen] = useState(false);
    const [alumnoEditandoId, setAlumnoEditandoId] = useState(null);
    const [valoresEditados, setValoresEditados] = useState({});

    // Actualiza el estado cuando cambian los inputs en edición
    const manejarCambio = (e, campo) => {
        setValoresEditados((prev) => ({
            ...prev,
            [campo]: e.target.value,
        }));
    };

    // Inicia la edición para un alumno
    const iniciarEdicion = (alumno) => {
        console.log(alumno, "Valores Editados");
        setAlumnoEditandoId(alumno.id);
        // Hacemos una copia profunda de alumno para evitar mutaciones directas del estado original
        setValoresEditados({ ...alumno });
    };

    // Guarda los cambios llamando a la función que viene del padre
    const guardarCambios = () => {
        onEditarAlumno(valoresEditados);
        setAlumnoEditandoId(null);
        setValoresEditados({});
    };

    // Cancela la edición y limpia los estados
    const cancelarEdicion = () => {
        setAlumnoEditandoId(null);
        setValoresEditados({});
    };

    return (
        <Container className="container-alumnos mt-4">
            

            {alumnos.length === 0 ? (
                <p className="text-center">No hay alumnos registrados aún.</p>
            ) : (
                
                <div className="lista-alumnos">
                    {alumnos.map((alumno) => (
                        
                        <div key={alumno.id} className="alumno-card">
                            {alumnoEditandoId === alumno.id ? (
                                // Modo edición
                                <>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`lu-${alumno.id}`}>LU:</label>
                                        <input
                                            id={`lu-${alumno.id}`}
                                            type="text"
                                            value={valoresEditados.lu || ""}
                                            onChange={(e) => manejarCambio(e, "lu")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`nombre-${alumno.id}`}>Nombre:</label>
                                        <input
                                            id={`nombre-${alumno.id}`}
                                            type="text"
                                            value={valoresEditados.nombre || ""}
                                            onChange={(e) => manejarCambio(e, "nombre")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`apellido-${alumno.id}`}>Apellido:</label>
                                        <input
                                            id={`apellido-${alumno.id}`}
                                            type="text"
                                            value={valoresEditados.apellido || ""}
                                            onChange={(e) => manejarCambio(e, "apellido")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`curso-${alumno.id}`}>Curso:</label>
                                        <input
                                            id={`curso-${alumno.id}`}
                                            type="text"
                                            value={valoresEditados.curso || ""}
                                            onChange={(e) => manejarCambio(e, "curso")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`email-${alumno.id}`}>Email:</label>
                                        <input
                                            id={`email-${alumno.id}`}
                                            type="email"
                                            value={valoresEditados.email || ""}
                                            onChange={(e) => manejarCambio(e, "email")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`domicilio-${alumno.id}`}>Domicilio:</label>
                                        <input
                                            id={`domicilio-${alumno.id}`}
                                            type="text"
                                            value={valoresEditados.domicilio || ""}
                                            onChange={(e) => manejarCambio(e, "domicilio")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor={`telefono-${alumno.id}`}>Teléfono:</label>
                                        <input
                                            id={`telefono-${alumno.id}`}
                                            type="text"
                                            value={valoresEditados.teléfono || ""}
                                            onChange={(e) => manejarCambio(e, "teléfono")}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-end mt-3">
                                        <button
                                            className="btn-guardar btn btn-sm me-2"
                                            onClick={guardarCambios}
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            className="btn-cancelar btn btn-sm btn-secondary"
                                            onClick={cancelarEdicion}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </>
                            ) : (
                                // Modo visualización
                                <>
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
                                            onClick={() => iniciarEdicion(alumno)}
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
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Sección de alumnos eliminados */}
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