import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Sidebar from '../../common/Sidebar';
import { useForm } from 'react-hook-form';
import { consultaAgregarReceta } from '../../helpers/queries';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (recetaNueva) => {
    consultaAgregarReceta(recetaNueva).then((respuestaCreado) => {
      if (respuestaCreado && respuestaCreado.status === 201) {
        Swal.fire(
          'Receta creada',
          `La receta ${recetaNueva.nombreReceta} fue creada correctamente`,
          'success'
        );
        reset();
        navegacion('/administrador');
      } else {
        Swal.fire(
          'Ocurrio un error',
          `La receta ${recetaNueva.nombreReceta} no fue creada, intentelo mas tarde`,
          'error'
        );
      }
    });
  };

  return (
    <Container className="mainSection  my-3">
      <Row className="g-3 mb-3">
        <Sidebar />
        <Col md={9}>
          <aside className="flex-grow-aside text-light">
            <Col>
              <hr />
              <h1 className="display-4 mt-3">Nueva Receta</h1>
              <hr />
            </Col>
            <Row>
              <Col className="d-flex justify-content-end">
                <Link
                  to="/administrador"
                  className="btn btn-secondary d-sm-block mt-2 mb-3 btnBlock"
                >
                  Volver Atrás
                </Link>
              </Col>
            </Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formNombreReceta">
                <Form.Label>Nombre Receta*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Vasos de Crema de Vainilla con frutos rojos"
                  {...register('nombreReceta', {
                    required: 'El nombre de la receta es obligatorio',
                    minLength: {
                      value: 2,
                      message:
                        'La cantidad minima de caracteres es de 2 digitos',
                    },
                    maxLength: {
                      value: 120,
                      message:
                        'La cantidad máxima de caracteres es de 120 digitos',
                    },
                  })}
                />
                {errors.nombreReceta && (
                  <Alert variant="danger" className="py-2 my-2">
                    {errors.nombreReceta?.message}
                  </Alert>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Label>Descripción*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ej: Una sola cucharadita de estos vasitos basta para rendirse totalmente a ella y convertirla en LA CREMA DE VAINILLA, con mayúsculas, por excelencia."
                  className="altoDeArea"
                  {...register('descripcionReceta', {
                    required: 'La descripción de la receta es obligatoria',
                    minLength: {
                      value: 2,
                      message:
                        'La cantidad minima de caracteres es de 2 digitos',
                    },
                    maxLength: {
                      value: 500,
                      message:
                        'La cantidad máxima de caracteres es de 500 digitos',
                    },
                  })}
                />
                {errors.descripcionReceta && (
                  <Alert variant="danger" className="py-2 my-2">
                    {errors.descripcionReceta?.message}
                  </Alert>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIngredientes">
                <Form.Label>Ingredientes*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ej: 330 g nata líquida, 2 vainas de vainilla, 55 g de azúcar, etcétera..."
                  className="altoDeArea"
                  {...register('ingredientes', {
                    required: 'Los ingredientes de la receta son obligatorios.',
                    minLength: {
                      value: 2,
                      message:
                        'La cantidad minima de caracteres es de 2 digitos',
                    },
                    maxLength: {
                      value: 600,
                      message:
                        'La cantidad máxima de caracteres es de 600 digitos',
                    },
                  })}
                />
                {errors.ingredientes && (
                  <Alert variant="danger" className="py-2 my-2">
                    {errors.ingredientes?.message}
                  </Alert>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formInstrucciones">
                <Form.Label>Instrucciones*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ej: 1. El día anterior corta longitudinalmente las vainas de vainilla y raspa las semillas. 2. Pon vainas y semillas con la nata en un recipiente hermético y deja que macere en la nevera. 3. ---"
                  className="altoDeArea"
                  {...register('instrucciones', {
                    required: 'Los ingredientes de la receta son obligatorios.',
                    minLength: {
                      value: 2,
                      message:
                        'La cantidad minima de caracteres es de 2 digitos',
                    },
                    maxLength: {
                      value: 1300,
                      message:
                        'La cantidad máxima de caracteres es de 1300 digitos',
                    },
                  })}
                />
                {errors.instrucciones && (
                  <Alert variant="danger" className="py-2 my-2">
                    {errors.instrucciones?.message}
                  </Alert>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen URL*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: https://images.pexels.com/photos/16132921/pexels-photo-16132921/free-photo-of-comida-mercado-fruta-grande.jpeg"
                  {...register('imagen', {
                    required: 'La imagen es un dato obligatorio.',
                    pattern: {
                      value:
                        /^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/,
                      message:
                        'La URL de la imagen debe cumplir con por ej: http://imagen.com/img.jpg',
                    },
                  })}
                />
                {errors.imagen && (
                  <Alert variant="danger" className="py-2 my-2">
                    {errors.imagen?.message}
                  </Alert>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Categoria*</Form.Label>
                <Form.Select
                  aria-label="Seleccione una categoría:"
                  {...register('categoria', {
                    required: 'Debe seleccionar una categoria...',
                  })}
                >
                  <option value="">Seleccione una opcion</option>
                  <option value="Dulce">Dulce</option>
                  <option value="Salado">Salado</option>
                  <option value="Infantiles">Infantiles</option>
                  <option value="Apto para Celíacos">Apto para Celíacos</option>
                </Form.Select>
                {errors.categoria && (
                  <Alert variant="danger" className="py-2 my-2">
                    {errors.categoria?.message}
                  </Alert>
                )}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-1 mb-3 btnBlock"
              >
                Guardar
              </Button>
            </Form>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default CrearReceta;
