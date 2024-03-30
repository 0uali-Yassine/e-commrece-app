import React
 from 'react';
import './App.css';
import { useGlobalContext } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import ToplevelMain from './component/ToplevelMain';
import Footer from './component/Footer';
import Product from './MainTwo/Product';
import Productdetails from './MainTwo/Productdetails';
import About from './MainTwo/About';
import Conditiongeneral from './AIde/Conditiongeneral';
import Bag from './main/Bag';
import SideBar from './component/SideBar';
function App() {
  const {isOpen,isOpenMenu}= useGlobalContext();

    
  return (
    <div>
        <BrowserRouter>
        {isOpen && <Bag/>}
        {isOpenMenu && <SideBar/>}
          <div  className='bigDiv'>
            <NavBar/>
            <Routes>
              <Route index='/' element={<ToplevelMain/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/product-details' element={<Productdetails/>}/>
              <Route path='/condition-general' element={<Conditiongeneral/>}/>
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
