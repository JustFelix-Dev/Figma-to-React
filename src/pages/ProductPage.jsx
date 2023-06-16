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
            <p className='first'>Lorem Ipsum es</p>
            <p className='second'>Lorem Ipsum es sim</p>
            <p className='third'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archiv  de texto. Lorem Ipsum ha sido el</p>
            <div className="modes">
                <span><img src="images/dark-mode.png" alt="darkmode-btn" /></span>
                <span><img src="images/light-mode.png" alt="lightmode-btn" /></span>
            </div>
            <div className="measurements">
                <div className="aspect-ratio">
                    <div className="height"></div>
                    <div className="width"></div>
                </div>
                <div className="size">
                    <span>Size in Inches</span>
                </div>
            </div>
            HEIGHT
            WIDTH
            Size in Inches
            52 cm
            43 cm
            $69.00
            1
            ADD TO CART
            BUY NOW
        </div>
      
       </div>
       
       </>
  )
}

export default ProductPage
