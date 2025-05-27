import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Inicio from "./components/Inicio";
import ListaAlumnos from "./components/ListaAlumnos";
import NuevoAlumno from "./components/NuevoAlumno";
import AcercaDe from "./components/AcercaDe";
import PaginaError from "./components/PaginaError";
import BarraNavegacion from "./Layout/barraNavegacion";
import MostrarAlumnos from "./components/DetallesAlumnos";

function Rutas() {
    const [alumnos, setAlumnos] = useState([]);
    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

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
            setAlumnos((alumnosPrevios) => alumnosPrevios.filter(alumno => alumno.id !== idAEliminar));
            alert(`Alumno con ID: ${idAEliminar} eliminado.`);
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
                                alumnos={alumnos}
                                onEliminarAlumno={eliminarAlumno}
                                onDetallesAlumno={manejarMostrarDetallesAlumno}
                                onEditarAlumno={editarAlumno}  // <--- Aquí debe estar
                            />
                        }
                    />
                    <Route path="nuevo-alumno" element={<NuevoAlumno onAgregarAlumno={agregarAlumno} />} />
                    <Route path="acerca-de" element={<AcercaDe />} />
                    <Route path="detalles-alumno" element={<MostrarAlumnos alumno={alumnoSeleccionado} />} />
                    <Route path="error" element={<PaginaError />} />
                    <Route path="*" element={<Navigate replace to="/error" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;