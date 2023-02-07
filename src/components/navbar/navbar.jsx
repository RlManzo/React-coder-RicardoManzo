import CartWidget from '../CartWidget/CartWidget';
import Dropdown from './categorias/Dropdown';
import Sections from './secciones/Sections';
import Logo from '../img/logoNegro.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}><img src={Logo} alt="" className='Logo'/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Sections/>
              <Dropdown/>
            </ul>
            <CartWidget cantCarrito={1}/>
          </div>
        </div>
      </nav>
        </>
);

}

export default Navbar;
