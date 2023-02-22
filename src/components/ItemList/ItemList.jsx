import Item from "../Item/Item";

//conversion de datos del json de JS a JSX con metodo map
const ItemList = ({products}) => {
    return (
        <>
          {products.map(producto => <Item item={producto}  key={producto.id}/>)}  
        </>
    );
}

export default ItemList;
