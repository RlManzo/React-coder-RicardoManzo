import { useContext, createContext, useState } from "react";

const carritoContext = createContext();

export const useCarritoContext = ()=> useContext(carritoContext)
export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) =>{
        return carrito.find(prod => prod.id === id);
    }

    const addItemCart = (producto, cantidad) => {
        if(isInCart(producto.id)){
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux  = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        }else{
            const prodCart ={
                ...producto,
                cant: cantidad
            }
        const aux = [...carrito];
        aux.push(prodCart)
        setCarrito(aux)
        }
    }
   const emptyCart = () =>{
    setCarrito([])
   }

   const removeItem = (id) =>{
      setCarrito(carrito.filter(prod => prod.id !== id))
   }

   const getItemQuantity = ()=>{
    return carrito.reduce((acum, prod) => 
          acum += prod.cant, 0
    )
   }

   const totalPrice = () => {
     return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
   }
   return(
    <carritoContext.Provider value={{carrito, totalPrice, getItemQuantity, emptyCart, addItemCart, removeItem}}>
         {props.children}
    </carritoContext.Provider>
   )
}