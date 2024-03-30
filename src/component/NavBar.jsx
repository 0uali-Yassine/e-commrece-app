import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoBagOutline } from "react-icons/io5";
import logo from '../Asset/logo.svg';
import { useGlobalContext } from '../Context';
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
    const {setIsOpen,allData,setIsOpenMenu} = useGlobalContext();

  return (
    <div>
        <h3 style={{fontWeight:'400',color:'#003c3b',backgroundColor:'#d29960',textAlign:'center',padding:'5px',fontFamily:'var(--font-family-heading)'}}>3 Articles de votre choix à 500 dhs + Cadeau gratuit</h3>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 36px',width:'100%',backgroundColor:'#003c3b'}}>
            <RxHamburgerMenu className='bg' onClick={()=> setIsOpenMenu(true)}/>
            <NavLink to='/'> <img src={logo} alt="logo" width='70px'height='70px'/></NavLink>
                <ul className='unoderList'>
                    <NavLink to='/'   style={{color:'#d29960',textDecoration:'none',alignSelf:'center',fontSize:'1.3rem'}}><li>Home</li></NavLink>
                    <NavLink to='/about'   style={{color:'#d29960',textDecoration:'none',alignSelf:'center',fontSize:'1.3rem'}}><li>About</li></NavLink>
                    <NavLink to='/product'   style={{color:'#d29960',textDecoration:'none',alignSelf:'center',fontSize:'1.3rem'}}><li  style={{textDecoration:'none'}}>Product</li></NavLink>
                </ul>
            <div style={{position:'relative'}}>
             <IoBagOutline onClick={()=> setIsOpen(true)} style={{color:'#d29960',fontSize:'2.3rem',alignSelf:'center'}}/>
             <span style={{backgroundColor:'#eeeacc',color:'#003c3b',fontWeight:'bold',position:'absolute',left:'19px',bottom:'28px',width:'24px',height:'24px',textAlign:'center',borderRadius:'50%'}}>{allData.Amount}</span>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;
