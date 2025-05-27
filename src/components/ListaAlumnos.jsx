import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ListaAlumnos({ alumnos, onEliminarAlumno, onDetallesAlumno, onEditarAlumno }) {
    const navigate = useNavigate();

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
        setAlumnoEditandoId(alumno.id);
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
        
        <Container className="mt-4">
            <h1 className="mb-4 text-center">Lista de Alumnos</h1>

            {alumnos.length === 0 ? (
                <p className="text-center">No hay alumnos registrados aún.</p>
            ) : (
                <div className="table-responsive shadow rounded">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>LU</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Curso</th>
                                <th>Email</th>
                                <th>Domicilio</th>
                                <th>Teléfono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno) => (
                                <tr key={alumno.id}>
                                    <td>{alumno.id}</td>

                                    {alumnoEditandoId === alumno.id ? (
                                        <>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={valoresEditados.lu || ""}
                                                    onChange={(e) => manejarCambio(e, "lu")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={valoresEditados.nombre || ""}
                                                    onChange={(e) => manejarCambio(e, "nombre")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={valoresEditados.apellido || ""}
                                                    onChange={(e) => manejarCambio(e, "apellido")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={valoresEditados.curso || ""}
                                                    onChange={(e) => manejarCambio(e, "curso")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="email"
                                                    value={valoresEditados.email || ""}
                                                    onChange={(e) => manejarCambio(e, "email")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={valoresEditados.domicilio || ""}
                                                    onChange={(e) => manejarCambio(e, "domicilio")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={valoresEditados.telefono || ""}
                                                    onChange={(e) => manejarCambio(e, "telefono")}
                                                    className="form-control form-control-sm"
                                                />
                                            </td>
                                            <td>
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
</td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{alumno.lu}</td>
                                            <td>{alumno.nombre}</td>
                                            <td>{alumno.apellido}</td>
                                            <td>{alumno.curso}</td>
                                            <td>{alumno.email}</td>
                                            <td>{alumno.domicilio}</td>
                                            <td>{alumno.telefono}</td>
                                            <td>
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
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </Container>
    );
}

export default ListaAlumnos;
