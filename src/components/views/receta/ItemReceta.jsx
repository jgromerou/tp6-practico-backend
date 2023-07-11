import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  consultaBorrarReceta,
  obtenerListaRecetas,
} from '../../helpers/queries';

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: `¿Estás seguro de borrar la receta ${receta.nombreReceta}?`,
      text: 'No se puede revertir este paso',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarReceta(receta._id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              'Receta eliminada',
              `La receta ${receta.nombreReceta} fue eliminada correctamente`,
              'success'
            );
            obtenerListaRecetas().then((respuesta) => {
              setRecetas(respuesta);
            });
          } else {
            Swal.fire(
              'Ocurrió un error',
              `Intente realizar esta opreación nuevamente más tarde`,
              'error'
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td className="tamanioCelda text-truncate">{receta._id}</td>
      <td className="tamanioCelda text-truncate">{receta.nombreReceta}</td>
      <td className="tamanioCelda text-truncate">{receta.imagen}</td>
      <td className="tamanioCeldaFijo">{receta.categoria}</td>
      <td className="tamanioCeldaOpciones text-center">
        <Link
          className="btn btn-warning my-2 my-lg-0 me-lg-2"
          to={'/administrador/editar-receta/' + receta._id}
        >
          <i className="bi bi-pencil p-1"></i>
        </Link>

        <Button variant="danger" onClick={() => borrarReceta()}>
          <i className="bi bi-x-lg p-1"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
