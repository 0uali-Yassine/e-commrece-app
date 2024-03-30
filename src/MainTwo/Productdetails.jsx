import React from 'react'
import { useGlobalContext } from '../Context';

function Productdetails() {
  const {productDetails,dispatch} = useGlobalContext();
  const {image,title,price,description} = productDetails;
  return (
    <div className='product-details' >
     <img src={image} height='299px'  alt="" />
      <div className='info-product' >
        <h2 style={{color:'#003c3b',fontFamily:'var(--font-family-heading)'}}><strong>{title}</strong></h2>
        <p style={{color:'#d29960'}}>${price}</p>
        <p style={{color:'#003c3b'}}>{description}</p>
        <button onClick={()=> dispatch({type:'addItemsToCart',payload:productDetails})} className='btn-send'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Productdetails;
