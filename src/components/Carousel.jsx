const Carousel = () => {
    return ( 
            <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption">
                        <span>Wood Cloth Sofa</span>
                        <div><a href="#">See More</a></div> 
                    </div>
                    <img src="images/image 6.png" className="d-block w-100 " alt="chair" height={450}/>
                </div>
                <div className="carousel-item">
                <div className="carousel-caption">
                        <span>Wood Cloth Sofa</span>
                        <div><a href="#">See More</a></div> 
                    </div>
                    <img src="images/image 6.png" className="d-block w-100 " alt="chair" height={450}/>
                </div>
                <div className="carousel-item">
                <div className="carousel-caption">
                        <span>Wood Cloth Sofa</span>
                        <div><a href="#">See More</a></div> 
                    </div>
                    <img src="images/image 6.png" className="d-block w-100" alt="chair" height={450}/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
                </div>
            </>
     );
}
 
export default Carousel;