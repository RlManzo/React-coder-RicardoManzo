import { Link } from "react-router-dom";
import React from "react";
const Dropdown = React.memo(() => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to={'/category/1'}>Papel</Link>
                  <Link className="dropdown-item" to={'/category/3'}>Articulos de Libreria</Link>
                  <Link className="dropdown-item" to={'/category/2'}>Mochilas</Link>
                </div>
              </li>
        </>
    );
})

export default Dropdown;
