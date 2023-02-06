import { Link } from "react-router-dom";
const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to={'/category/1'}>Mochilas</Link>
                  <Link className="dropdown-item" to={'/category/2'}>Linea  polimero</Link>
                  <Link className="dropdown-item" to={'/category/3'}>Linea ceramica</Link>
                  <Link className="dropdown-item" to={'/category/4'}>Ofertas</Link>
                </div>
              </li>
        </>
    );
}

export default Dropdown;
