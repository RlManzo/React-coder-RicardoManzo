import {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
const [Producto, setProducto] = useState([]);
const {id}=useParams();
useEffect(() =>{
    fetch('../Json/Productos.json')
    .then(response => response.json())
    .then(products =>{
        const item = products.find(prods => prods.id === parseInt(id))
        setProducto(item)
        })
},[])
    return (
        <div className="card mb-3 cardDetailContainer container">
            
           <ItemDetail item={Producto}/>
        </div>
    )

}

export default ItemDetailContainer;