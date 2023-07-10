import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardReceta = ({ receta }) => {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" className="imgCard" src={receta.imagen} />
        <Card.Body>
          <Card.Title className="alturaTitulo">
            {receta.nombreReceta}
          </Card.Title>
          <Card.Text className="mb-4">Categoria: {receta.categoria}</Card.Text>
          <Link className="btn btn-primary" to={'/detalle/' + receta.id}>
            Ver Detalles
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
