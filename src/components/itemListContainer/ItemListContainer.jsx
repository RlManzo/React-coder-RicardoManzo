import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
const [Productos, setProductos] = useState([]);
const {Categoria}=useParams();
useEffect(() =>{
    if(Categoria){
        fetch('../Json/Productos.json')
    .then(response => response.json())
    .then(items =>{
        const product = items.filter(prod => prod.Categoria === Categoria) 
        setProductos(product)
        })
    }
    else{
        fetch('./Json/Productos.json')
    .then(response => response.json())
    .then(products =>{
         setProductos(products)
        })
    }
    
},[Categoria])
    return (
        <div className="row cardProductos">
        <ItemList products= {Productos}/>
        </div>
    )

}

export default ItemListContainer;