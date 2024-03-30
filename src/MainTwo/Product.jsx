import React, { useEffect, useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { useGlobalContext } from '../Context';
import { NavLink } from 'react-router-dom';

function Product() {
  const [product,setProduct] = useState([]);
  const {setProductDetails,dispatch} = useGlobalContext();

  const fetchData = async ()=> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <h1 style={{fontFamily:'var(--font-family-heading)',color:'#003c3b',padding:'10px'}}>Product</h1>
      <div className='product' >
            {
                product.map(itm => {
                    const {image,id,title,price,category} = itm;
                    return (
                        <div className='itm' key={id} style={{position:'relative',overflow:'hidden',maxWidth:'200px',height:'440px',border:'2px solid #003c3b',color:'#003c3b'}}>
                            <img src={image} alt={title} style={{width:'100%',height:'300px'}}/>
                            <p style={{fontWeight:'lighter'}}>{category}</p>
                            <h3 style={{padding:'5px 0px'}}>{title}</h3>
                            <p style={{fontWeight:'bolder'}}>${price} <span style={{textDecoration:'line-through',fontWeight:'lighter'}}> ${price+80}</span> </p>
                            <div className='add-show'>
                                <div onClick={()=> dispatch({type:'addItemsToCart',payload:itm})} style={{backgroundColor:'#d29960',padding:'8px',height:'53px',width:'53px'}}>
                                     <IoAddOutline style={{fontSize:'2.4rem'}}/>
                                </div>
                                <div onClick={()=> setProductDetails(itm)} style={{backgroundColor:'#003c3b',padding:'8px',height:'53px',width:'53px'}}>
                                  <NavLink to='/product-details'>
                                   <GrView style={{fontSize:'2.2rem',color:'#d29960'}}/>
                                  </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    </div>
  )
}

export default Product;
