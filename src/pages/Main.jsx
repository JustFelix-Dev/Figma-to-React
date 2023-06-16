import { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    const [ open, setOpen ] = useState(false)

    const handleClick = ()=>{
        setOpen(true)
    }
    return ( 
            <>
              <nav>
                <div className="minimal">
                    <span>Minimal.</span>
                </div>
                <div className="links">
                    <ul className={ open ? 'active':""}>
                        <li className="active"><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <div className="cart">
                        <img onClick={handleClick} src="images/menu.png" alt="hamburger-menu" />
                        <img src="images/shopping-bag.png" alt="cart" />
                    </div>
                </div>
              </nav>
             <main>
                <Outlet/>
             </main>
            </>
     );
}
 
export default Main;