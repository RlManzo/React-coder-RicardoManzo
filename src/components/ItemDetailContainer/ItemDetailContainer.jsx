import {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductoDetail } from "../../firebase/firebase";
const ItemDetailContainer = () => {
const [Producto, setProducto] = useState([]);
const {id}=useParams();
useEffect(() =>{
    getProductoDetail(id)
    .then(item =>{
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