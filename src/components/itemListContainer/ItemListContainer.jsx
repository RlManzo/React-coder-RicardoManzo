import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../firebase/firebase";

const ItemListContainer = () => {
const [Productos, setProductos] = useState([]);
const {idCategoria}=useParams();
useEffect(() =>{
    if(idCategoria){
        getProductos()
    .then(items =>{
        const product = items.filter(prod => prod.idCategoria === idCategoria) 
        
        setProductos(product)
        })
    }
    else{
        getProductos()
    .then(products =>{
        
         setProductos(products)
        })
    }
    
},[idCategoria])
    return (
        <div className="row cardProductos">
        <ItemList products= {Productos}/>
        </div>
    )

}

export default ItemListContainer;