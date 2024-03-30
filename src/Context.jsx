import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
const myContext = createContext();





function Context({children}) {
  const [productDetails,setProductDetails] = useState({});
  const [isOpen,setIsOpen] = useState(false);
  const [isOpenMenu,setIsOpenMenu] = useState(false);
  const [allData,dispatch] = useReducer(reducer,{data:[],Amount:0,Total:0});
  

  // for menu when is falls within the specified range
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 652 && width <= 1200) {
        setIsOpenMenu(false);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  


  useEffect(()=>{
    dispatch({type:'update'});
  },[allData.data])

  return (
        <myContext.Provider value={{setProductDetails,productDetails,
        setIsOpen,isOpen,
        dispatch,setIsOpenMenu,isOpenMenu,allData}}>
            {children}
        </myContext.Provider>
  )
}
export function useGlobalContext(){
    return useContext(myContext);
}
export default Context;
