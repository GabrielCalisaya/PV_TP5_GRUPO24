import { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function MostrarAlumnos({ alumno }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (alumno) {
      console.log("Alumno Actualizado", alumno);
    }
  }, [alumno]);

  return (
    <Container className="detalle-alumno-container">
      <h2 className="detalle-alumno-titulo">Detalles del Alumno</h2>
      {alumno ? (
        <Card className="detalle-alumno-card">
          <p><strong>LU:</strong> {alumno.lu}</p>
          <p><strong>Nombre:</strong> {alumno.nombre}</p>
          <p><strong>Apellido:</strong> {alumno.apellido}</p>
          <p><strong>Curso:</strong> {alumno.curso}</p>
          <p><strong>Email:</strong> {alumno.email}</p>
          <p><strong>Teléfono:</strong> {alumno.teléfono}</p>
          <Button
            className="detalle-alumno-btn mt-3"
            onClick={() => navigate(-1)}
          >
            Volver
          </Button>
        </Card>
      ) : (
        <p className="detalle-alumno-sin-datos">No hay alumno ingresado aún</p>
      )}
    </Container>
  );
}

export default MostrarAlumnos;