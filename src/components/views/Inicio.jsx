import { Container, Row } from 'react-bootstrap';
import CardReceta from './receta/CardReceta';
import { obtenerListaRecetas } from '../helpers/queries';
import { useEffect, useState } from 'react';

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerListaRecetas()
      .then((repuesta) => {
        setRecetas(repuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="mainSection">
      <img
        className="banner imgbanner"
        src="https://images.pexels.com/photos/5737464/pexels-photo-5737464.jpeg"
        alt="fondo receta"
      />
      <Container>
        <h1 className="display-4 my-2">Nuestras Recetas</h1>
        <hr />
        <Row>
          {recetas.map((receta) => (
            <CardReceta key={receta._id} receta={receta}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
