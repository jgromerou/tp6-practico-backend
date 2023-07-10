import { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { consultaReceta } from '../helpers/queries';

const DetalleReceta = () => {
  const [nombreReceta, setNombreReceta] = useState('');
  const [descripcionReceta, setDescripcionReceta] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [instrucciones, setInstucciones] = useState('');
  const [imagen, setImagen] = useState('');
  const [categoria, setCategoria] = useState('');
  const { id } = useParams();

  useEffect(() => {
    consultaReceta(id).then((respuesta) => {
      if (respuesta) {
        setNombreReceta(respuesta.nombreReceta);
        setDescripcionReceta(respuesta.descripcionReceta);
        setIngredientes(respuesta.ingredientes);
        setInstucciones(respuesta.instrucciones);
        setImagen(respuesta.imagen);
        setCategoria(respuesta.categoria);
      } else {
        Swal.fire(
          'Ocurrio un error',
          `No se puede consultar la receta, intentelo mas tarde`,
          'error'
        );
      }
    });
  }, []);
  return (
    <Container className="my-3 mainSection">
      <Card className="bg-dark text-light">
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={imagen} className="cardImage" />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>
                <h1>{nombreReceta}</h1>
              </Card.Title>
              <hr />
              <h2>Descripción</h2>
              {descripcionReceta}
              <hr />
              <h2>Ingredientes</h2>
              {ingredientes}
              <hr />
              <h2>Instrucciones</h2>
              {instrucciones}
              <br />
              <hr />
              <span className="text-danger fw-semibold mt-2">
                Categoria:
              </span>{' '}
              {categoria}
              <br />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
