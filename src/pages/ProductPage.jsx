import React from 'react'
import Navbar from '../components/Navbar'

const ProductPage = () => {
  return (
       <>
       <Navbar showNav={false}/>
       <div className="productDetails">
        <div className="Images">
            <div className="main">
                <img src="images/product-main.png" alt="productImg" className='img-fluid' />
            </div>
            <div className="others">
                <img src="images/product-1.png" alt="productImg" className='img-fluid' />
                <img src="images/product-2.png" alt="productImg" className='img-fluid' />
                <img src="images/product-3.png" alt="productImg" className='img-fluid' />
            </div>
        </div>

        <div className="Texts">
        </div>
       </div>
       </>
  )
}

export default ProductPage
