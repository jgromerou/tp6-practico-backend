import { Container, Row, Col, Table } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';
import { obtenerListaRecetas } from '../helpers/queries';
import { useState, useEffect } from 'react';
import ItemReceta from './receta/ItemReceta';

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerListaRecetas().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);
  return (
    <Container className="mainSection  my-3">
      <Row className="g-3 mb-3">
        <Sidebar />
        <Col md={9}>
          <aside className="flex-grow-aside">
            <hr />
            <section className="container mainSection">
              <div className="d-flex justify-content-between align-items-center mt-3">
                <h1 className="display-4 ">Recetas Disponibles</h1>
              </div>
              <hr />
              <Table
                responsive
                striped
                bordered
                hover
                className="text-bg-light"
              >
                <thead className="mt-2">
                  <tr>
                    <th>Cod</th>
                    <th>Receta</th>
                    <th>URL de Imagen</th>
                    <th>Categoria</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recetas.map((receta) => (
                    <ItemReceta
                      key={receta.id}
                      receta={receta}
                      setRecetas={setRecetas}
                    ></ItemReceta>
                  ))}
                </tbody>
              </Table>
            </section>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default Administrador;
