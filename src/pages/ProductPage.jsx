import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const ProductPage = () => {
    const [ price, setPrice] = useState(69)
    const [ height, setHeight ] = useState('52cm')
    const [ width, setWidth ] = useState('42cm')
    const [ cartNo, setCartNo] = useState(1)

    const handleInches=()=>{
        setHeight('20.5 inc.')
        setWidth('16.5 inc.')
    }

    const handleAddCart=()=>{
        setCartNo(cartNo + 1)
        setPrice(price * 2)
    }
    const handleMinusCart=()=>{
        if(cartNo > 1){
            setCartNo(cartNo - 1)
            setPrice(price / 2)
        }
    }

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
                    <div className="height">
                        <span>HEIGHT</span>
                        <span className="text">{height}</span>
                    </div>
                    <div className="width">
                        <span>WIDTH</span>
                        <span className='text'>{width}</span>
                    </div>
                </div>
                <div className="size">
                    <span onClick={handleInches}>size in inches</span>
                </div>
            </div>
                {
                 <div className='price'>${price}.00</div>
                 }
           <div className="cartCount">
            <span onClick={handleMinusCart}><img src="images/minusCart.png" alt="minusImg"/></span>
            <span  className='number'>{cartNo}</span>
            <span onClick={handleAddCart}> <img src="images/addCart.png" alt="addCart"/></span>
           </div>
           <div className="cartButtons">
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
           </div>
        </div>
       </div>
       
       </>
  )
}

export default ProductPage
