import { useRef, useState } from "react";
import Carousel from "../components/Carousel";
import MultiRange from "../components/MultiRange";
import ColorPicker from "../components/ColorPicker";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";


const AllProducts = () => {
    const [ open,setOpen ] = useState(false)
    const slideRef = useRef()

    const handleChange = ()=>{
        setOpen(true)
        slideRef.current.style.display ="none"
    }

    const handleDefault = () =>{
        setOpen(false)
        slideRef.current.style.display ="flex"
    }
    return ( 
            <>
             <Carousel/>
             <div className="menubar">
            <div className="menu" >
                <span className='first'>Menu</span>
                <span onClick={handleChange} className='second'><img ref={slideRef} src="images/menu.png" alt="hamburger-menu" height={26}/></span>
            </div>
            <div className="menubargroup2">
            <div className="sort">
                <span className='first'>Sort by: A-Z</span>
                <span className='second'><img src="images/chevron-down.png" alt="dropdown arrow"height={19} />
                </span>
            </div>
            <div className="result">
                <span>Showing 1 - 12 of 24 results</span>
            </div>
            </div>
         </div>
             <div className="allProducts">
             <div className={ open ? 'sidebar active' : "sidebar"}>
                <span className="menuBack" onClick={handleDefault} style={{fontSize:"1.2rem",fontWeight:"700",position:"absolute",right:"1rem",top:"0.3rem"}}> <img src="images/menu-back.png" alt="menu-back Icon" /></span>
                <ul className="first" style={{width:"250px"}}>
                    <span>All products</span>
                    <li style={{marginTop:"0.8rem"}}><a href="#">Living</a></li>
                    <li><a href="#">Dining</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Technics</a></li>
                    <li style={{marginBottom:"1rem"}} ><a href="#">Accessories</a></li>
                </ul>
                <div className="second">
                    <span>Filter by</span>
                    <div className="price">
                    <p>Price</p>
                    <MultiRange/>
                    </div>
                </div>
                <div className="third">
                    <span >Color</span>
                    <ColorPicker/>
                </div>
                <ul className="fourth">
                    <span >Size</span>
                    <li><a href="#">Small</a></li>
                    <li><a href="#">Medium</a></li>
                    <li><a href="#">Large</a></li>
                </ul>
                <ul className="fifth" style={{width:"250px"}}>
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
                    <li style={{marginBottom:"1rem"}} ><a href="#">Lorem</a></li>
                </ul>
                <div className="sixth">
                    <span>Popular Tags</span>
                    <p style={{maxWidth:"40ch"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, reprehenderit.
                    </p>
                </div>
             </div>
             <div className="productCards">
                <Link to={'product'}>
                <div className="card one" style={{position:"relative"}}>
                    <div className="header" >
                        <span className="new">New</span>
                        <img src="images/love.png" alt="love-icon" className="love" />
                    </div>
                    <img src="images/image-1.png" alt="card" className="img-fluid" />
                    <div className="footer">
                        <span className="name">Chair & Table</span>
                        <span className="price">$69.00</span>
                    </div>
                </div>
                </Link>
               <Link><div className="card two"style={{position:"relative"}} >
                <div className="header" >
                        <span className="new"></span>
                        <img src="images/love.png" alt="love-icon" className="love" />
                    </div>
                    <img src="images/image-2.png" alt="card" className="img-fluid" />
                </div></Link> 
                <Link>
                <div className="card three">
                    <img src="images/image-3.png" alt="card" className="img-fluid" />
                </div>
                </Link>  
                <Link>
                <div className="card four">
                    <img src="images/image-4.png" alt="card" className="img-fluid" />
                </div>
                </Link> 
                <Link>
                <div className="card five">
                    <img src="images/image-5.png" alt="card" className="img-fluid" />
                </div>
                </Link>    
                <Link>
                <div className="card six">
                    <img src="images/image-6.png" alt="card"  className="img-fluid" />
                </div>
                </Link>  
             </div>
             </div>
             <Pagination/>
             <Footer/>
             <div className="empty">
                
             </div>
            </>
     );
}
 
export default AllProducts;