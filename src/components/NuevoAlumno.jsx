import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/style.css";

// Añadi onReactivarYActualizarAlumno - Gabriel
function NuevoAlumno({ onAgregarAlumno, alumnos, alumnosEliminados, onReactivarYActualizarAlumno }) {
  const [formData, aplicarCambios] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    teléfono: '',
  });

  const navigate = useNavigate();

  const manejarCambios = (e) => {
    const { name, value } = e.target;
    aplicarCambios({ ...formData, [name]: value });
  };

  const manejarEnvios = (e) => {
    e.preventDefault();

    // validamos de campos obligatorios
    if (!formData.lu.trim() || !formData.nombre.trim() || !formData.apellido.trim()) {
      alert('Los campos LU, Nombre y Apellido son obligatorios.');
      return;
    }

    // verificar existencia en alumnos ACTIVOS por LU
    const alumnoActivoExistentePorLu = alumnos.find(alumno => alumno.lu === formData.lu);
    if (alumnoActivoExistentePorLu) {
      alert('Ya existe un alumno ACTIVO con ese LU. Por favor, ingresa un LU diferente.');
      aplicarCambios({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        teléfono: '',
      });
      return;
    }

    const alumnoActivoExistentePorEmail = alumnos.find(alumno => alumno.email === formData.email);
    if (alumnoActivoExistentePorEmail) {
      alert('Ya existe un alumno ACTIVO con ese email. Por favor, ingresa un email diferente.');
      aplicarCambios({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        teléfono: '',
      });
      return;
    }

const alumnoEliminadoExistentePorLu = alumnosEliminados.find(alumno => alumno.lu === formData.lu);
if (alumnoEliminadoExistentePorLu) {
    onReactivarYActualizarAlumno({ ...formData, id: alumnoEliminadoExistentePorLu.id });
    aplicarCambios({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        teléfono: '',
    });
    navigate('/lista-alumnos');
    return;
}

    const alumnoEliminadoExistentePorEmail = alumnosEliminados.find(alumno => alumno.email === formData.email);
    if (alumnoEliminadoExistentePorEmail) {
        // Si el email pertenece a un alumno eliminado, se le informa al usuario
        alert('Este email fue utilizado por un alumno eliminado. Por favor, usa otro email o reactiva el alumno con su LU original.');
        aplicarCambios({
            lu: '',
            nombre: '',
            apellido: '',
            curso: '',
            email: '',
            domicilio: '',
            teléfono: '',
        });
        return;
    }

    // Si no existe en activos ni se reactivó un eliminado, procede a agregar un nuevo alumno
    onAgregarAlumno(formData);

    aplicarCambios({
      lu: '',
      nombre: '',
      apellido: '',
      curso: '',
      email: '',
      domicilio: '',
      teléfono: '',
    });

    navigate('/lista-alumnos');
  };

  return (
    <form onSubmit={manejarEnvios} className="formulario-nuevo-alumno">
      <h2>Agregar Nuevo Alumno</h2>
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
      <button type="submit" className="btn btn-custom">Guardar Alumno</button>

    </form>
  );
}

export default NuevoAlumno;