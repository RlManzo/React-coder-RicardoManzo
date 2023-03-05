import { useCarritoContext } from "../../context/CarritoContext"

const ItemCart = ({item}) => {
    const {removeItem} = useCarritoContext()
    return (
        <>
        <br />
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title titleColor">{item.nombre} {item.modelo}</h3>
                        <p className="card-text h6">Cantidad: {item.cant}</p>
                        <p className="card-text btn btn-light disabled">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <br/>
                        <p className="card-text btn btn-light disabled ">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                        <br/>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default ItemCart;

