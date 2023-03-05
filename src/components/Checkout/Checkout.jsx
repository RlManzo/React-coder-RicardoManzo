import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import React from "react";
import { toast } from "react-toastify";
import { createOrdenCompra, getOrdenCompra, getProductoDetail, updateProducto } from "../../firebase/firebase";
import Swal from "sweetalert2";
const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const consultarFormulario = (e) =>{
        e.preventDefault()
        const datosForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datosForm)  
        
        const aux = [...carrito]
if(cliente.email !== cliente.repEmail){
  Swal.fire({
    icon: 'error',
  title: 'Oops...',
  text: '¡Email incorrecto!'
  })
  
  console.log("email incorrecto")
}if(cliente.email === cliente.repEmail){
      
        aux.forEach(prodCarrito => {
          getProductoDetail(prodCarrito.id)
          .then(prodBDD => {
              prodBDD.stock -= prodCarrito.cant 
              updateProducto(prodCarrito.id, prodBDD)
          })
      })
        
        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
          toast.success(`¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${ordenCompra.id
          } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
          emptyCart()
          e.target.reset()
          navigate("/")
      
    })
       } 
    }

    return (
        <>
        {carrito.lenght === 0
        ?
        <>
         <h2 className="btn btn-success">Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
         </>
        :  
         <div className="fondoForm">
           <div className="container" style={{marginTop:"20px"}}>
           <form onSubmit={consultarFormulario} ref={datosFormulario}>
             <div className="mb-3">
               <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
               <input type="text" className="form-control" name="nombre" title="no agregaste tu nombre" required/>
             </div>
             <div className="mb-3">
               <label htmlFor="email" className="form-label">Email</label>
               <input type="email" className="form-control" name="email" title="email requerido" required />
             </div>
             <div className="mb-3">
               <label htmlFor="email" className="form-label">Repetir Email</label>
               <input type="email" className="form-control" name="repEmail" required/>
             </div>
            <div className="mb-3">
               <label htmlFor="celular" className="form-label">Numero telefonico</label>
               <input type="number" className="form-control" name="celular" required />
            </div>
            <div className="mb-3">
               <label htmlFor="direccion" className="form-label">Direccion</label>
               <input type="text" className="form-control" name="direccion" required/>
            </div>
               <button type="submit" className="btn btn-danger">Finalizar compra</button>
           </form>
         </div> 
        </div>   
    }
       
        </>
        
    );
}

export default Checkout;
