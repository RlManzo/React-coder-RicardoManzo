import { Link } from "react-router-dom";

const CarouselItem = () => {
    return (
        <>
    <div id="carouselExampleControls" className="carousel slide CarouselStyles" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Link  to={'/category/3'}> <img src="../ImgProducts/flyer1.png" className="d-block w-100" alt="..." /></Link>
    </div>
   <div className="carousel-item">
    <img src="../ImgProducts/flyer2.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="../ImgProducts/flyer3.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}

export default CarouselItem;
