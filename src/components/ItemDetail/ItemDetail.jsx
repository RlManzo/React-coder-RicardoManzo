

const ItemDetail = ({item}) => {
    return (
        <>
            <div className="card" style={{width: '30rem'}}>
  <img src={`../ImgProducts/${item.img}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <button className="btn btn-success">Finalizar comprar</button> 
  </div>
</div>


        </>
    );
}

export default ItemDetail;
