import { Link } from "react-router-dom";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
              <Link className="nav-link active" to={'/'}>Inicio<span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
        </>
    );
}

export default Sections;
