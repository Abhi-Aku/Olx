import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { NavLink } from "react-router-dom";



const Secnd = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center space-x-6 px-6 py-2 border-b border-gray-300 text-gray-900 text-sm">
        <div
          className="flex items-center font-bold uppercase cursor-pointer"
          onClick={() => setShow(!show)}
        >
          ALL CATEGORIES {show ? <SlArrowUp className="ml-1 text-xs" /> : <SlArrowDown className="ml-1 text-xs" />}
        </div>

        {/* Main Categories (Always visible) */}
        <div className="flex space-x-4 text-gray-700">
          <span className="cursor-pointer hover:text-blue-400">Cars</span>
          <span className="cursor-pointer hover:text-blue-400">Motorcycles</span>
          <span className="cursor-pointer hover:text-blue-400">Mobile Phones</span>
          <span className="cursor-pointer hover:text-blue-400">For Sale: Houses & Apartments</span>
          <span className="cursor-pointer hover:text-blue-400">Scooters</span>
          <span className="cursor-pointer hover:text-blue-400">Commercial & Other Vehicles</span>
          <span className="cursor-pointer hover:text-blue-400">For Rent: Houses & Apartments</span>
        </div>
      </div>

      {show && (
       <div class="flex flex-row justify-center mt-5">
       <div class="basis-3xs"><h1>Car</h1><br></br>
</div>
       <div class="basis-2xs"><h1>Mobiles</h1>

       <NavLink 
  to="/mobile" 
  className="cursor-pointer hover:text-blue-400"
>
  Mobile Phones
</NavLink></div>
       <div class="basis-xs"><h1>Books, Sports & Hobbies</h1></div>
       <div class="basis-sm"><h1>Furniture</h1></div>
     </div>
      )}
    </>
  );
};

export default Secnd;
