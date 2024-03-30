import React from 'react';
import women from '../Asset/woman_hero.png';
import { NavLink } from 'react-router-dom';

function Hero() {
  
  return (
    <div className='hero'>
        <div className='hero-container'>
            <h3>We are changing the <br /> way people shop</h3>
            <p  className='para-hero' style={{fontFamily:'var(--font-family)',color:'#003c3b',fontSize:'1.2rem'}}>Experience shopping reinvented at our ecommerce store. With state-of-the-art technology and user-centric design, we're reshaping online retail. Join us on this journey to a simpler, smarter way to shop</p>
            <NavLink to='/product'><button  className='btn-Découvrez'>Découvrez Ayla</button></NavLink>
        </div>
        <img src={women}alt="bg-women" />
    </div>
  )
}

export default Hero;
