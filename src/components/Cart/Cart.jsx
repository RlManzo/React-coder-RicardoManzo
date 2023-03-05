import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"

const Cart = () => {
    const {carrito, totalPrice, emptyCart } = useCarritoContext()
        
    return(
        <>
            { carrito.length === 0 ? 
            <> 
            <br/>
            <div className="text-center">
                    <h2 className="titleColor ">Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-danger">Continuar comprando</button></Link> 
            </div>    
            </>
              : 
              
                <div className="container cartContainer">
                    <br />
                    {<ItemList products={carrito} plantilla={'ItemCart'}/>}
                    <div className="divButtons">
                        <p className="h6">Resumen de la compra:$ {new Intl.NumberFormat('de-DE').format(totalPrice())} </p>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="nav-link" to={'/'}><button className="btn btn-danger botonSpace">Continuar Comprando</button></Link> 
                            <Link className="nav-link" to={'/checkout'}><button className="btn btn-info botonSpace">Finalizar compra</button></Link> 
                            <button className="btn btn-danger botonSpace" onClick={()=> emptyCart()}>Vaciar carrito</button> </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;


