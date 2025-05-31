import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NuevoAlumno({ onAgregarAlumno, alumnos }) {
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
    if (alumnos.some(alumno => alumno.lu === formData.lu)) {
      alert('Ya existe un alumno con ese LU. Por favor, ingresa un LU diferente.');
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

    if (alumnos.some(alumno => alumno.email === formData.email)) {
      alert('Ya existe un alumno con ese email. Por favor, ingresa un email diferente.');
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

    if (!formData.lu.trim() || !formData.nombre.trim() || !formData.apellido.trim()) {
      alert('Los campos LU, Nombre y Apellido son obligatorios.');
      return;
    }
    // Llama a la función onAgregarAlumno desde el componente padre
    onAgregarAlumno(formData);

    // Limpia el formulario despues de agregar
    aplicarCambios({
      lu: '',
      nombre: '',
      apellido: '',
      curso: '',
      email: '',
      domicilio: '',
      teléfono: '',
    });

    // Ahora, redirige a la pagina de lista de alumnos
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