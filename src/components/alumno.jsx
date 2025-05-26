function nuevoAlumno({ onAddStudent }) {
  const [formData, setFormData] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    teléfono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (!formData.lu.trim() || !formData.nombre.trim() || !formData.apellido.trim()) {
      alert('Los campos LU, Nombre y Apellido son obligatorios.');
      return;
    }
    // Llama a la función `onAddStudent` pasada desde el componente padre.
    onAddStudent(formData);
    // Limpia el formulario después de agregar
    setFormData({
      lu: '',
      nombre: '',
      apellido: '',
      curso: '',
      email: '',
      domicilio: '',
      teléfono: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nuevo Alumno</h2>
      <div>
        <label htmlFor="lu">LU:</label>
        <input type="text" id="lu" name="lu" value={formData.lu} onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="curso">Curso:</label>
        <input type="text" id="curso" name="curso" value={formData.curso} onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="domicilio">Domicilio:</label>
        <input type="text" id="domicilio" name="domicilio" value={formData.domicilio} onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="teléfono">Teléfono:</label>
        <input type="text" id="teléfono" name="teléfono" value={formData.teléfono} onChange={handleChange} required/>
      </div>
      <button type="submit">Agregar Alumno</button>
    </form>
  );
}

export default nuevoAlumno;
