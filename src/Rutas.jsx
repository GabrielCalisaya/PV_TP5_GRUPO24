import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Inicio from "./components/Inicio";
import ListaAlumnos from "./components/ListaAlumnos";
import NuevoAlumno from "./components/NuevoAlumno";
import AcercaDe from "./components/AcercaDe";
import PaginaError from "./components/PaginaError";
import BarraNavegacion from "./Layout/barraNavegacion";
import MostrarAlumnos from "./components/DetallesAlumnos";
import EditarAlumno from "./components/EditarAlumno";

function Rutas() {
    const [alumnos, setAlumnos] = useState([]);
    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);
    const [alumnosEliminados, setAlumnosEliminados] = useState([]);

    const agregarAlumno = (datosNuevoAlumno) => {
        const alumnoConId = {
            id: alumnos.length > 0 ? Math.max(...alumnos.map(s => s.id)) + 1 : 1,
            ...datosNuevoAlumno
        };
        setAlumnos((alumnosPrevios) => [...alumnosPrevios, alumnoConId]);
        alert(`Alumno ${datosNuevoAlumno.nombre} ${datosNuevoAlumno.apellido} agregado exitosamente!`);
    };

    const eliminarAlumno = (idAEliminar) => {
        const isConfirmed = window.confirm(`¿Estás seguro de que quieres eliminar al alumno con ID: ${idAEliminar}?`);
        if (isConfirmed) {
            let alumnoEliminadoTemp = null;
            setAlumnos((alumnosPrevios) => {
                const updatedAlumnos = alumnosPrevios.filter(alumno => {
                    if (alumno.id === idAEliminar) {
                        alumnoEliminadoTemp = alumno;
                        return false;
                    }
                    return true;
                });
                return updatedAlumnos;
            });

            if (alumnoEliminadoTemp) {
                setAlumnosEliminados((prev) => [...prev, alumnoEliminadoTemp]);
                alert(`Alumno con ID: ${idAEliminar} eliminado.`);
            } else {
                 alert(`No se encontró al alumno con ID: ${idAEliminar}.`);
            }
        } else {
            alert("Eliminación cancelada.");
        }
    };

    const editarAlumno = (alumnoEditado) => {
        setAlumnos((alumnosPrevios) =>
            alumnosPrevios.map((al) =>
                al.id === alumnoEditado.id ? alumnoEditado : al
            )
        );
        alert(`Alumno ${alumnoEditado.nombre} ${alumnoEditado.apellido} actualizado!`);
    };

const reactivarYActualizarAlumno = (alumnoReactivado) => {
    setAlumnosEliminados((prevEliminados) =>
        prevEliminados.filter((al) => al.lu !== alumnoReactivado.lu)
    );

    // Agregamos el alumno a la lista de activos con los datos nuevos
    // Usamos directamente el ID que ya viene en alumnoReactivado (el ID original del alumn eliminado)
    setAlumnos((alumnosPrevios) => [
        ...alumnosPrevios,
        alumnoReactivado 
    ]);

    alert(`Alumno ${alumnoReactivado.nombre} ${alumnoReactivado.apellido} ha sido reactivado y actualizado.`);
};

    const manejarMostrarDetallesAlumno = (alumno) => {
        setAlumnoSeleccionado(alumno);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BarraNavegacion />}>
                    <Route index element={<Inicio />} />
                    <Route
                        path="lista-alumnos"
                        element={
                            <ListaAlumnos
                                alumnosEliminados={alumnosEliminados}
                                alumnos={alumnos}
                                onEliminarAlumno={eliminarAlumno}
                                onDetallesAlumno={manejarMostrarDetallesAlumno}
                            />
                        }
                    />
                    <Route
                        path="nuevo-alumno"
                        element={
                            <NuevoAlumno
                                alumnos={alumnos}
                                alumnosEliminados={alumnosEliminados}
                                onAgregarAlumno={agregarAlumno}
                                onReactivarYActualizarAlumno={reactivarYActualizarAlumno} // Pasamos la nueva función
                            />
                        }
                    />
                    <Route path="acerca-de" element={<AcercaDe />} />
                    <Route path="detalles-alumno" element={<MostrarAlumnos alumno={alumnoSeleccionado} />} />
                    <Route path="editar-alumno/:id" element={<EditarAlumno alumnos={alumnos} onEditarAlumno={editarAlumno} />} />
                    <Route path="error" element={<PaginaError />} />
                    <Route path="*" element={<Navigate replace to="/error" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;