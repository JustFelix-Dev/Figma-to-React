import React, { useRef, useState } from 'react'

const Navbar = ({showNav=true}) => {
    const [ open, setOpen ] = useState(false)
    const cartRef = useRef()

    const handleClick = ()=>{
        cartRef.current.style.display = "none"
        setOpen(true)
    }
    const handleDefault=()=>{
        cartRef.current.style.display = "initial"
        setOpen(false)
    }
  return (
          <>
          <nav className={showNav ? '' : 'productsPage'}>
               <div className="minimal">
                   <span>Minimal.</span>
               </div>
               <div className="links">
                {
                    showNav && 
                   <ul className={ open ? 'active':""}>
                       <li className="active"><a href="#">Shop</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Contact</a></li>
                       <li><a href="#">FAQ</a></li>
                       <li onClick={handleDefault} style={{fontWeight:"500",fontSize:"1.3rem",position:"absolute",top:"-19%",right:"0.3rem",cursor:"pointer"}}>&times;</li>
                   </ul>
                }
                   <div className="cart">
                       <img className="cartMenu" ref={cartRef} onClick={handleClick} src="images/menu.png" alt="hamburger-menu" />
                       <img src="images/shopping-bag.png" alt="cart" />
                   </div>
               </div>
             </nav>
          </>
  )
}

export default Navbar
