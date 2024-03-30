import React from 'react'
import { useGlobalContext } from '../Context';
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function SideBar() {
    const {setIsOpenMenu}  = useGlobalContext();
  return (
    <div className='menu' style={{width:'100%',height:'100vh',position:'fixed',overflow:'auto',zIndex:'10',backdropFilter:'blur(10px)',background:'linear-gradient(180deg, rgba(248, 248, 248, 0.3) 0%, rgba(217, 217, 217, 0.3) 100%)'}}>
        <div style={{display:'flex',flexDirection:'column',width:'400px',height:'100vh',padding:'15px',backgroundColor:'#eeeacc',position:'absolute',left:'0px'}}>
            <div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #d29960'}}>
                <h3 style={{color:'#003c3b',fontFamily:'var(--font-family-heading)'}}>MENU</h3>
                <button onClick={()=> setIsOpenMenu(false)} style={{fontSize:'1.7rem',cursor:'pointer',height:'31px',marginTop:'2px',outline:'none',border:'none',backgroundColor:'transparent'}}>
                    <FaXmark style={{color:'rgb(210, 153, 96)'}}/>
                </button>
            </div>
            <ul className='underList-sideBar'>
                <NavLink to='/'   style={{color:'#003c3b',textDecoration:'none',alignSelf:'center',fontSize:'1.3rem',fontFamily:'var(--font-family-heading)'}}><li onClick={()=> setIsOpenMenu(false)}  value={0}>Home</li></NavLink>
                <NavLink to='/about'   style={{color:'#003c3b',textDecoration:'none',alignSelf:'center',fontSize:'1.3rem',fontFamily:'var(--font-family-heading)'}}><li onClick={()=> setIsOpenMenu(false)} value={1}>About</li></NavLink>
                <NavLink to='/product'   style={{color:'#003c3b',textDecoration:'none',alignSelf:'center',fontSize:'1.3rem',fontFamily:'var(--font-family-heading)'}}><li onClick={()=> setIsOpenMenu(false)} style={{textDecoration:'none'}} value={2}>Product</li></NavLink>
            </ul>
        </div>
    </div>
  )
}

export default SideBar;
