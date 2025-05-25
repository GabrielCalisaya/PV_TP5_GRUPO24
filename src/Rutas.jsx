import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ListaAlumno from "./components/ListaAlumno";
import NuevoAlumno from "./components/NuevoAlumno";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import NavbarExample from "./Layout/navbar";

function Rutas() {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavbarExample />}>
        <Route index element={<Home />} />
        <Route path="lista-alumno" element={<ListaAlumno />} />
        <Route path="nuevo-alumno" element={<NuevoAlumno />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
        </Route>
    </Routes>
    </BrowserRouter>
);
}

export default Rutas;
