import { Routes, Route } from 'react-router-dom';
import Administrador from '../views/Administrador';
import CrearReceta from '../views/receta/CrearReceta';
import EditarReceta from '../views/receta/EditarReceta';

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="/crear-receta"
          element={<CrearReceta></CrearReceta>}
        ></Route>
        <Route
          exact
          path="/editar-receta/:id"
          element={<EditarReceta></EditarReceta>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
