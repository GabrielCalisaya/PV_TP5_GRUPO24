import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Inicio from "./components/Inicio";
import ListaAlumnos from "./components/ListaAlumnos";
import NuevoAlumno from "./components/NuevoAlumno";
import AcercaDe from "./components/AcercaDe";
import PaginaError from "./components/PaginaError";
import BarraNavegacion from "./Layout/barraNavegacion";

function Rutas() {
    const [alumnos, setAlumnos] = useState([]);

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

    return (
        <BrowserRouter>
            <Routes>
                {/*barra de navegación */}
                <Route path="/" element={<BarraNavegacion />}>
                    <Route index element={<Inicio />} />
                    {/* Ruta para la lista de alumnos*/}
                    <Route
                        path="lista-alumnos"
                        element={<ListaAlumnos alumnos={alumnos} onEliminarAlumno={eliminarAlumno} />}
                    />
                    {/* Ruta para el formulario de nuevo alumno: le pasamos la función para agregar */}
                    <Route path="nuevo-alumno" element={<NuevoAlumno onAgregarAlumno={agregarAlumno} />} />
                    <Route path="acerca-de" element={<AcercaDe />} />
                    <Route path="error" element={<PaginaError />} />
                    {/* Redirección para rutas no encontradas */}
                    <Route path="*" element={<Navigate replace to="/error" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;