import { Container, Row, Alert, Spinner } from 'react-bootstrap';
import CardReceta from './receta/CardReceta';
import { obtenerListaRecetas } from '../helpers/queries';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import LoadingSpinner from '../helpers/LoadingSpinner';

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  useEffect(() => {
    obtenerListaRecetas().then((respuesta) => {
      setRecetas(respuesta);
      setMostrarSpinner(true);
      if (respuesta === undefined) {
        Swal.fire({
          title: 'Ocurrió un error',
          text: 'Algo salió mal, inténtelo más tarde.',
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
        return;
      }
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
          {recetas.length > 0 ? (
            recetas.map((receta) => (
              <CardReceta key={receta._id} receta={receta}></CardReceta>
            ))
          ) : mostrarSpinner ? (
            <Alert variant="light" className="py-2 my-2">
              <p className="display-5">No hay recetas disponibles</p>
            </Alert>
          ) : (
            <LoadingSpinner />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
