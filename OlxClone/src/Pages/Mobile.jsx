import React from 'react';
import { NavLink } from 'react-router-dom';

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
    </>
  );
}

export default Mobile;