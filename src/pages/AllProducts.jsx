import { useState } from "react";
import Carousel from "../components/Carousel";
import MultiRange from "../components/MultiRange";
import ColorPicker from "../components/ColorPicker";

const AllProducts = () => {
    return ( 
            <>
             <Carousel/>
             <div className="allProducts">
             <div className="sidebar">
                <ul className="first">
                    <span>All products</span>
                    <li><a href="#">Living</a></li>
                    <li><a href="#">Dining</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Technics</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
                <div className="second">
                    <span>Filter by</span>
                    <div className="price">
                    <p>Price</p>
                    <MultiRange/>
                    </div>
                </div>
                <div className="third">
                    <span>Color</span>
                    <ColorPicker/>
                </div>
                <ul className="fourth">
                    <span>Size</span>
                    <li><a href="#">Small</a></li>
                    <li><a href="#">Medium</a></li>
                    <li><a href="#">Large</a></li>
                </ul>
                <ul className="fifth">
                    <span>Brands</span>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                </ul>
                <div className="sixth">
                    <span>Popular Tags</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, reprehenderit.
                    </p>
                </div>
             </div>
             <div className="productCards">

             </div>
             </div>
            </>
     );
}
 
export default AllProducts;