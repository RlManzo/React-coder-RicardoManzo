import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
const [Productos, setProductos] = useState([]);
const {Categoria}=useParams()
useEffect(() =>{
    if(Categoria){
        fetch('../Json/Productos.json')
    .then(response => response.json())
    .then(items =>{
        const product = items.filter(prod => prod.Categoria === Categoria) 
        const productsList = ItemList({product})
        setProductos(productsList)
        })
    }
    else{
        fetch('./Json/Productos.json')
    .then(response => response.json())
    .then(products =>{
        const productsList = ItemList({products})
        setProductos(productsList)
        })
    }
    
},[Categoria])
    return (
        <div className="row cardProductos">
            {Productos}
        </div>
    )

}

export default ItemListContainer;