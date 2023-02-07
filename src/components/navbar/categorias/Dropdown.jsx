import { Link } from "react-router-dom";
const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to={'/category/papel'}>Papel</Link>
                  <Link className="dropdown-item" to={'/category/libreria'}>Articulos de Libreria</Link>
                  <Link className="dropdown-item" to={'/category/mochilas'}>Mochilas</Link>
                </div>
              </li>
        </>
    );
}

export default Dropdown;
