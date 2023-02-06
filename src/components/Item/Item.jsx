
//plantilla de las cards
const Item = ({item}) => {
    return (
        <>
    <div className="card cardStyles" style={{width: '18rem'}}>
        <img src={`../ImgProducts/${item.img}`} className="card-img-top imgCard" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nombre} </h5>
          <p className="card-text">Marca: {item.marca} </p>
          <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
          <button className="btn btn-primary">Ver Producto</button>
        </div>
    </div>
        </>
    );
}

export default Item;
