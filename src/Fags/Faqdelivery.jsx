import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Faqdelivery({id,q,answer}) {
    const [show,setShow] = useState(false);

    function handlClick(){
        setShow(prev=> !prev);
    }
    
  return (
    <div key={id} style={{backgroundColor:'white',border:'2px solid #003c3b',width:'96%',margin:'auto'}}>
      <div onClick={handlClick} style={{backgroundColor:'#d29960',cursor:'pointer',borderBottom:'1px solid  #003c3b',padding:'10px',display:'flex',justifyContent:'space-between',height:'auto'}}>
        <p style={{color:'#003c3b',fontSize:'1.3rem',fontFamily:'var(--font-family)'}}>{q}</p>
        <div style={{display:'flex',alignItems:'center',background:'#003c3b',width:'29px',height:'29px',textAlign:'center',borderRadius:'50%'}}>
            {!show ? <FaPlus style={{color:'#d29960',marginLeft:'6px'}}/> : <FaMinus style={{color:'#d29960',marginLeft:'6px'}}/> }
        </div>
      </div>
      <p style={{padding:'10px',color:'#003c3b',backgroundColor:'#FeFac0',display:`${!show ? 'none':'block'}`}}>{answer}</p>
    </div>
  )
}

export default Faqdelivery;
