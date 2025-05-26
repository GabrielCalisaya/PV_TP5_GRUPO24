import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ListaAlumnos({ alumnos, onEliminarAlumno, onDetallesAlumno }) { // ListaAlumno y onEliminarAlumno
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Lista de Alumnos</h1>
            {alumnos.length === 0 ? (
                <p>No hay alumnos registrados aún.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>LU</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Curso</th>
                                <th>Email</th>
                                <th>Domicilio</th>
                                <th>Teléfono</th>
                                <th>Acciones</th> {/* Columna de editar y eliminar */}
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno) => (
                                <tr key={alumno.id}>
                                    <td>{alumno.id}</td>
                                    <td>{alumno.lu}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.curso}</td>
                                    <td>{alumno.email}</td>
                                    <td>{alumno.domicilio}</td>
                                    <td>{alumno.teléfono}</td>
                                    <td>
                                        {/* BOTON EDITAR - falta agregar funcion */}
                                        <button 
                                            className="btn btn-sm btn-info me-2"
                                            onClick={() => {
                                                onDetallesAlumno(alumno);
                                                navigate("/detalles-alumno")
                                            }}>
                                            Detalles
                                        </button>
                                        <button className="btn btn-sm btn-info me-2">
                                            Editar
                                        </button>
                                        {/* BOTON ELIMINAR - ya agregue la funcion */}
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => onEliminarAlumno(alumno.id)} // onEliminarAlumno
                                        >
                                            Eliminar
                                        </button>
                                    </td>
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