import React, { useRef, useState } from 'react';
import Faqdelivery from '../Fags/Faqdelivery';
import Faqcommande from '../Fags/Faqcommande';
import Faqreturn from '../Fags/Faqreturn';
import data from '../Data';

function Faqandcontact() {
    const [form,setForm] = useState({});
    const inptName = useRef();
    const inptEmail = useRef();
    const inptPhone = useRef();
    const inptMessage = useRef();

    function handlChange(){
        setForm({
            name:inptName.current.value,
            email:inptEmail.current.value,
            phone:inptPhone.current.value,
            message:inptMessage.current.value
        })
    }

  
  return (
    <div id='faqs'>
        
        <h1 style={{fontFamily:'var(--font-family-heading)',padding:'10px 22px'}}>Delivery</h1>
        {
            data[0].map((itm,key) => {
                return <Faqdelivery key={key} {...itm}/> 
            })
        }
        <h1 style={{fontFamily:'var(--font-family-heading)',padding:'10px 22px'}}>Return</h1>

        {
            data[1].map((itm,key) => {
                return <Faqreturn key={key} {...itm}/> 
            })
        }
        <h1 style={{fontFamily:'var(--font-family-heading)',padding:'10px 22px'}}>Commande</h1>

        {
            data[2].map((itm,key) => {
                return <Faqcommande key={key} {...itm}/> 
            })
        }
        <div style={{padding:'20px 10px',width:'100%'}}>
            <h1 style={{fontFamily:'var(--font-family-heading)',color:'#003c3b'}}>Contact</h1>
            <p style={{fontFamily:'var(--font-family)',padding:'3px 0px'}}>Notre équipe de service client est à votre écoute.</p>
            <p style={{fontFamily:'var(--font-family)',padding:'3px 0px'}}>Tél: 0779090492</p>
            <p style={{fontFamily:'var(--font-family)',padding:'3px 0px'}}>yassinzerouali0@gmail.com</p>
            <form style={{padding:'9px 0px',height:'390px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <input ref={inptName} onChange={handlChange} type="text"placeholder='Name'  style={{width:'49%'}} required/>
                    <input ref={inptEmail} onChange={handlChange} type="text" placeholder='Email' style={{width:'49%'}} required/>
                </div>
                <input ref={inptPhone} onChange={handlChange} type="text" placeholder='Phone Number'  required/>
                <textarea ref={inptMessage} onChange={handlChange} name="" id="" cols="30" rows="10" placeholder='Message' required></textarea>
                <button className='btn-send'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Faqandcontact;
