import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Asset/logo.svg';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


function Footer() {
  return (
    <footer>
      <section className='footer-sectionOne' >
        <img src={logo} alt="logo" width='70px'height='60px' />
        <form style={{border:'1px solid rgb(210, 153, 96)',width:'260px',display:'flex'}}>
            <input type="text" style={{height:'33px',backgroundColor:'transparent',color:'rgb(210, 153, 96)',fontFamily:'var(--font-familt)'}} placeholder='Votre Email' required/>
            <button style={{fontSize:'1.7rem',height:'31px',marginTop:'2px',outline:'none',border:'none',backgroundColor:'transparent'}}>
                <FaArrowRightLong style={{color:'rgb(210, 153, 96)'}}/>
            </button>
        </form>
        <p style={{color:'rgb(210, 153, 96)',fontFamily:'var(--font-family)'}}>Profitez de toutes les nouveautés, promotions et offres exclusives avant tout le monde.</p>
        <div style={{display:'flex',flexDirection:'column',width:'260px'}}>
            <div style={{display:'flex',padding:'5px 0px'}}>
                <MdEmail style={{color:'rgb(210, 153, 96)'}}/>
                <p style={{marginLeft:'10px',color:'rgb(210, 153, 96)',fontFamily:'var(--font-family)'}}>yasisnzerouali0@gmail.com</p>
            </div>
            <div style={{display:'flex',padding:'5px 0px'}}>
                <FaPhone style={{color:'rgb(210, 153, 96)'}}/>
                <p style={{marginLeft:'10px',color:'rgb(210, 153, 96)',fontFamily:'var(--font-family)'}}>+212 779090492</p>
            </div>
        </div>
      </section>

      <section style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
        <h1  style={{color:'rgb(210, 153, 96)',fontFamily:'var(--font-family-heading)'}}>Besoin d'aide</h1>
        <a href='#faqs' style={{textDecoration:'none',color:'rgb(210, 153, 96)'}}>FAQs</a>
        <NavLink to='/condition-general' style={{textDecoration:'none',color:'rgb(210, 153, 96)'}}>Conditions générales de vente</NavLink>
        <NavLink to='/condition-general' style={{textDecoration:'none',color:'rgb(210, 153, 96)'}}>Conditions générales de vente</NavLink>
        <NavLink to='/condition-general' style={{textDecoration:'none',color:'rgb(210, 153, 96)'}}>Conditions générales de vente</NavLink>
        <NavLink to='/condition-general' style={{textDecoration:'none',color:'rgb(210, 153, 96)'}}>Conditions générales de vente</NavLink>
      </section>

    </footer>
  )
}

export default Footer;
