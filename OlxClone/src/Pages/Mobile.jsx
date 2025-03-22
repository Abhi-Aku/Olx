import React from 'react';
import { NavLink } from 'react-router-dom';
import { Prodect } from '../Pages/Prodect';
const Mobile = () => {
  return (
  
     <>
      <div className='flex  items-center px-5'>
        <caption>Popular Searches:
          <NavLink className='hover:text-blue-300' to="/search/iphone">iphone</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/one-plus">one plus</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/samsung">samsung</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/realme">realme</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/vivo">vivo</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/oppo">oppo</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/nokia">Nokia</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/mi">mi</NavLink > - 
          <NavLink className='hover:text-blue-300' to="/search/motorola">motorola</NavLink>
        </caption>
      </div> 
      <br></br>
      <div className="px-4 py-6 md:px-8">
      <nav className="text-sm text-gray-500">
        <a href="/" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Mobiles</a>
      </nav>
      <h1 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
        Buy & Sell Second Hand Mobile Phones in India
      </h1>
      <p className="mt-2 text-gray-600 ">
        Explore a vast collection of  looking for the latest
        flagship smartphones or affordable budget-friendly options, OLX has a wide selection from top brands. Our listings…
        <a href="#" className="text-blue-600 font-medium hover:underline"> Read more</a>
      </p>
    </div>
    <Prodect/>
   
    
      
    
   
       
     </>   
  
  );
}

export default Mobile;