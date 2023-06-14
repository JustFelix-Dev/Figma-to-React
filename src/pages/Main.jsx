import { Outlet } from "react-router-dom";

const Main = () => {
    return ( 
            <>
              <nav>
                <div className="minimal">
                    <span>Minimal.</span>
                </div>
                <div className="links">
                    <ul>
                        <li className="active"><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <div className="cart">
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