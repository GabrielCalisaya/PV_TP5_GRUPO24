import { useEffect } from "react";
function MostrarAlumnos({alumno}) {
    useEffect(()=>{
        if(alumno) {
            console.log("Alumno Actualizado", alumno)
        }
    },[alumno]); //Esto se ejecutará cada vez que alumno cambia
    return (
        <div>
            {alumno ? (
                <>
                <p>LU:{alumno.lu}</p>
                <p>Nombre:{alumno.nombre}</p>
                <p>Apellido:{alumno.apellido}</p>
                <p>Curso:{alumno.curso}</p>
                <p>Email:{alumno.email}</p>
                <p>Teléfono:{alumno.telefono}</p>
                </>
            ) : (
                <p>No hay alumno ingresado aún</p>
            )}
        </div>
    );
}

export default MostrarAlumnos;