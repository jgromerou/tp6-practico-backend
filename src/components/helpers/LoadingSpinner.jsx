import { Spinner } from 'react-bootstrap';
const LoadingSpinner = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  );
};

export default LoadingSpinner;
