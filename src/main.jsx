import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MostrarAlumnos from './components/DetallesAlumnos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MostrarAlumnos />
  </StrictMode>,
)
