import React from 'react';
import { useGlobalContext } from '../Context';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


function Bag() {
    const {setIsOpen,allData,dispatch} = useGlobalContext();
   
   
  return (
    <div  style={{width:'100%',height:'100vh',position:'fixed',overflow:'auto',zIndex:'10',backdropFilter:'blur(10px)',background:'linear-gradient(180deg, rgba(248, 248, 248, 0.3) 0%, rgba(217, 217, 217, 0.3) 100%)'}}>
        <div style={{display:'flex',flexDirection:'column',width:'400px',height:'100vh',padding:'15px',backgroundColor:'#eeeacc',position:'absolute',right:'0px'}}>
            <div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #d29960'}}>
                <h3 style={{color:'#003c3b',fontFamily:'var(--font-family-heading)'}}>SHOPPING BAG ({allData.Amount})</h3>
                <button onClick={()=> setIsOpen(false)} style={{fontSize:'1.7rem',cursor:'pointer',height:'31px',marginTop:'2px',outline:'none',border:'none',backgroundColor:'transparent'}}>
                    <FaArrowRightLong style={{color:'rgb(210, 153, 96)'}}/>
                </button>
            </div>
            <div style={{overflowY:'scroll',overflowX:'hidden'}}>
                {
                allData.data.length < 1 ? <h3 style={{fontFamily:'var(--font-family)',padding:'10px',color:'#003c3b'}}>Your basket is empty.</h3> : allData.data.map((itm,key)=> {
                        const {id,image,title,price,amount} = itm;
                        return (
                            <div key={key} style={{display:'flex',padding:'8px 0px',borderBottom:'1px solid #d29960'}}>
                                <div style={{display:'flex'}}>
                                    <img src={image} width='100px' alt="" />
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',width:'200px'}}>
                                        <p style={{fontFamily:'var(--font-family)',color:'#003c3b'}}>{title}</p>
                                        <div style={{display:'flex',marginLeft:'4px',backgroundColor:'#d29960a9',justifyContent:'space-between',width:'55px',height:'23px',alignItems:'center'}}>
                                            <FaMinus onClick={()=> dispatch({type:'dicress',payload:id})}   style={{color:'#003c3b',border:'1px solid #d29960',cursor:'pointer'}}/>
                                            <p style={{color:'#003c3b'}}>{amount}</p>
                                            <FaPlus onClick={()=> dispatch({type:'incress',payload:id})}  style={{color:'#003c3b',border:'1px solid #d29960',cursor:'pointer'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=> dispatch({type:'removeItems',payload:id})}  style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                    <FaXmark style={{alignSelf:'flex-end',color:'#003c3b'}}/>
                                    <p style={{color:'#003c3b'}}>${price}</p>
                                </div>
                            </div>
                        )
                })
                }
            </div>
            <div style={{display:'flex',justifyContent:'space-around',width:'93%',height:"100px",backgroundColor:'rgb(210, 153, 96)',position:'absolute',bottom:'0px',flexDirection:'column'}}>
                <div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #003c3b',padding:'4px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',width:'115px'}}>
                        <h4 style={{fontFamily:'var(--font-family-heading)',color:'#003c3b'}}>TOTAL:</h4>
                        <p style={{color:'#003c3b'}}>${parseFloat(allData.Total.toFixed(2))}</p>
                    </div>
                    <MdDelete onClick={()=> dispatch({type:'removeAll'})} style={{color:'red',alignSelf:'center',fontSize:'1.5rem'}}/>
                </div>
                <button className='btn-check'>CHEKOUT</button>
            </div>

        </div>
    </div>
  )
}

export default Bag;
