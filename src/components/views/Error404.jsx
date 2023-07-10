import { Link } from 'react-router-dom';
import error from '../../assets/error404.jpg';
const Error404 = () => {
  return (
    <section className="mainSection text-center  mb-1 bg-light">
      <img src={error} alt="error 404" className="error404" />
      <div>
        <Link
          to="/"
          className="btn btn-primary d-block d-sm-inline-block my-3 mx-3"
        >
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
};

export default Error404;
