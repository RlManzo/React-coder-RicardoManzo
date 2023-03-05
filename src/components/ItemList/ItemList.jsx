import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";
//conversion de datos del json de JS a JSX con metodo map
const ItemList = ({products, plantilla}) => {
    return (
        <>
           
          {
        plantilla === 'item' 
        ? 
        products.map(producto => <Item item={producto} key={producto.id}/>)
        :
        products.map(producto => <ItemCart item={producto} key={producto.id}/>)
      }
        </>
    );
}

export default ItemList;
