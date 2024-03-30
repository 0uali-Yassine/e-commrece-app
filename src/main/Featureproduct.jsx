import React, { useState, useEffect } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { useGlobalContext } from '../Context';
import { NavLink } from 'react-router-dom';

function Featureproduct() {
    const [featureProduct,setFeatureProduct] = useState([]);
    const {setProductDetails} = useGlobalContext();

    async function fetchData(){
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=3');
            const data = await response.json();
            setFeatureProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <marquee>Bijoux de haute qualité • Acier inoxydable • Recommandée par +1400 clients • Livraison gratuite partout au Maroc</marquee>
         <h1 style={{textAlign:'center',fontFamily:'var(--font-family-heading)',color:'#003c3b',margin:'auto',width:'386px',padding:'10px',borderBottom:'1px solid #003c3b'}}>Featured Products</h1>
        <div style={{display:'flex',justifyContent:'space-evenly',width:'100%',padding:'20px'}}>
            {
                featureProduct.map(itm => {
                    const {image,id,title,price,category} = itm;
                    return (
                        <div className='itm' key={id} style={{position:'relative',overflow:'hidden',maxWidth:'200px',border:'2px solid #003c3b',color:'#003c3b'}}>
                            <img src={image} alt={title} style={{width:'100%'}}/>
                            <p style={{fontWeight:'lighter'}}>{category}</p>
                            <h3 style={{padding:'5px 0px'}}>{title}</h3>
                            <p style={{fontWeight:'bolder'}}>${price} <span style={{textDecoration:'line-through',fontWeight:'lighter'}}> ${price+80}</span> </p>
                            <div className='add-show'>
                                <div style={{backgroundColor:'#d29960',padding:'8px',height:'53px',width:'53px'}}>
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

export default Featureproduct
