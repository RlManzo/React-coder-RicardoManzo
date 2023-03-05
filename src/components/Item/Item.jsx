import { Link } from "react-router-dom";
//plantilla de las cards
const Item = ({item}) => {
    return (
        <>
    <div className="card cardStyles" style={{width: '18rem'}}>
        <img src={item.img} className="card-img-top imgCard" alt="..." />
        <div className="card-body">
          <p className="card-title h5 btn-color titleColor">{item.nombre} </p>
          <p className="btn btn-light disabled">Marca: {item.marca} </p>
          <p className="card-text titleColor1">$ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
          <button className="btn btn-danger"><Link className="nav-link" to={`./item/${item.id}`}>Ver Producto</Link></button>
        </div>
    </div>
        </>
    );
}

export default Item;
