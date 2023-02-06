import {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
const [Producto, setProducto] = useState([]);
useEffect(() =>{
    fetch('./Json/Productos.json')
    .then(response => response.json())
    .then(products =>{
        const item = products.find(prods => prods.id === 2)
        setProducto(item)
        })
},[])
    return (
        <div className="row cardProductos">
           <ItemDetail item={Producto}/>
        </div>
    )

}

export default ItemDetailContainer;