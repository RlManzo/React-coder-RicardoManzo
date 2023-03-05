import { useState } from "react"
import { toast } from 'react-toastify'
const ItemCount = ({valInicial, stock, onAdd}) => {
const [contador, setContador] = useState(valInicial)
const sumar = () =>  (contador < stock) && setContador(contador + 1) 
const restar = () => (contador > valInicial)  && setContador(contador - 1) 
const agregarCarrito = () => {
    onAdd(contador)
    
    toast.success(` Agregaste ${contador} productos al carrito!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }


    return (
        <>
             <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            {contador}
        <button className="btn btn-light" onClick={() => restar()}>-</button>
        <button className="btn btn-outline-secondary" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
