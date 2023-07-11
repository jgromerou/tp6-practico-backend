import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {};
  return (
    <>
      <Col md={3}>
        <aside className="flex-grow-aside">
          <h3 className="fw-bold mb-3 mt-2">Hola: {usuario.nombreUsuario}</h3>
          <Link
            to="/administrador/crear-receta"
            className="btn btn-primary w-100 d-sm-block mt-1 btnBlock"
          >
            Nueva Receta
          </Link>
        </aside>
      </Col>
    </>
  );
};

export default Sidebar;
