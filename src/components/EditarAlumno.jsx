import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditarAlumno({ alumnos, onEditarAlumno }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [alumnoAEditar, setAlumnoAEditar] = useState(null);
    const [formData, setFormData] = useState({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        teléfono: '',
    });

    useEffect(() => {
        const alumno = alumnos.find(alu => alu.id === parseInt(id));
        if (alumno) {
            setAlumnoAEditar(alumno);
            setFormData({ ...alumno });
        } else {
            navigate('/lista-alumnos');
        }
    }, [id, alumnos, navigate]);

    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        onEditarAlumno(formData);
        navigate('/lista-alumnos');
    };

    const handleVolver = () => {
        navigate('/lista-alumnos');
    };

    if (!alumnoAEditar) {
        return <div>Cargando datos...</div>;
    }

    return (
        <form onSubmit={manejarEnvio} className="formulario-nuevo-alumno mt-4">
            <h2>Editar Alumno</h2>
            <div>
                <label htmlFor="lu">LU:</label>
                <input type="text" id="lu" name="lu" value={formData.lu} onChange={manejarCambios} required />
            </div>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={manejarCambios} required />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={manejarCambios} required />
            </div>
            <div>
                <label htmlFor="curso">Curso:</label>
                <input type="text" id="curso" name="curso" value={formData.curso} onChange={manejarCambios} required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={manejarCambios} required />
            </div>
            <div>
                <label htmlFor="domicilio">Domicilio:</label>
                <input type="text" id="domicilio" name="domicilio" value={formData.domicilio} onChange={manejarCambios} required />
            </div>
            <div>
                <label htmlFor="teléfono">Teléfono:</label>
                <input type="text" id="teléfono" name="teléfono" value={formData.teléfono} onChange={manejarCambios} required />
            </div>
            <button type="submit" className="btn btn-custom">Guardar Cambios</button>
            <button type="button" className="btn btn-secondary mt-2" onClick={handleVolver}>Volver a la Lista</button>
        </form>
    );
}

export default EditarAlumno;