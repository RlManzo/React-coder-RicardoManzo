import ItemCount from "../ItemCount/ItemCount";
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
const ItemDetail = ({item}) => {
    const {addItemCart} = useCarritoContext()
    const onAdd = (cantidad) =>{
       addItemCart(item, cantidad)
    }
    return (
        <div className="row g-0">
            <div className="col-md-4">
  <img src={item.img} className="card-img-top imgDetail" alt="..." />
 </div>
 <div className="col-md-8">
    <div className="card-body text-center">
    <h3 className="card-title titleColor text-center">{item.nombre} </h3>
    <p className="btn btn-light disabled">Marca: {item.marca} </p>
    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
    <p className="card-text">Stock: {item.stock} </p>
    <p className="card-text"><ItemCount valInicial={1} stock={item.stock} onAdd={onAdd} /></p>
    <Link className="nav-link" to={'/checkout'}><button className="btn btn-danger">Finalizar compra</button></Link> 
  </div>
</div>
   
  
</div>


    
    );
}

export default ItemDetail;
