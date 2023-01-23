const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Linea Textil</a>
                  <a className="dropdown-item" href="#">Linea  polimero</a>
                  <a className="dropdown-item" href="#">Linea ceramica</a>
                  <a className="dropdown-item" href="#">Ofertas</a>
                </div>
              </li>
        </>
    );
}

export default Dropdown;
