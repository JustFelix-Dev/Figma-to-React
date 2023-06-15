import React from 'react'

const Menubar = () => {
  return (
         <>
         <div className="menubar">
            <div className="menu">
                <span>Menu</span>
                <span><img src="images/menu.png" alt="hamburger-menu" /></span>
            </div>
            <div className="sort">
                <span>Sort by: A-Z</span>
                <span><img src="images/chevron-down.png" alt="dropdown arrow"/>
                </span>
            </div>
            <div className="result">
                <span>Showing 1 - 12 of 24 results</span>
            </div>
         </div>
         </>
  )
}

export default Menubar
