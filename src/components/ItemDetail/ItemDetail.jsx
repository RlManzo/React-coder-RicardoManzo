import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
  <img src={item.img} className="card-img-top imgDetail" alt="..." />
 </div>
 <div className="col-md-8">
    <div className="card-body text-center">
    <h3 className="card-title">{item.nombre} </h3>
    <p className="card-text">Marca: {item.marca} </p>
    <p className="card-text">Precio: ${item.precio} </p>
    <p className="card-text">Stock: {item.stock} </p>
    <p className="card-text"><ItemCount valInicial={1} stock={item.stock} /></p>
  <button className="btn btn-success">Finalizar comprar</button> 
  </div>
</div>
   
  
</div>


    
    );
}

export default ItemDetail;
