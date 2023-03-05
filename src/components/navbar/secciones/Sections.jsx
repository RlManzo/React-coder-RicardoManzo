import { Link } from "react-router-dom";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
              <Link className="nav-link active" to={'/'}>Inicio<span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link " to={'/contacto'} > Contacto</Link>
              </li>
        </>
    );
}

export default Sections;
