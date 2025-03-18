import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import Secnd from "./Secnd";

const Header = () => {
  const style ={
    color : "white",
    borderLeft : "5px solid yellow",
    borderTop : "5px solid aqua",
    borderRight : "5px solid blue",
    borderBottom : "5px solid blue",
    


   

    
  }
  return (
   <>
    <header>
      <nav className="flex justify-evenly items-center h-20 bg-gray-100 p-4 gap-6">
        {/* Logo */}
        <div className="text-xl font-bold">OLX</div>

        {/* Location Search */}
        <div className="flex items-center w-64 border-2 border-gray-800 rounded-md px-3 py-2 bg-white">
          <IoSearch className="text-gray-600 text-lg" />
          <input
            type="text"
            placeholder="India"
            className="w-full px-2 outline-none bg-transparent text-gray-800"
          />
          <SlArrowDown className="text-gray-600 text-sm" />
        </div>

        {/* General Search */}
        <div className="flex items-center w-full max-w-3xl border border-gray-700 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder='Search "Properties"'
            className="w-full px-4 py-2 outline-none text-gray-700 placeholder-gray-500"
          />
          <button className="bg-gray-900 p-3 flex items-center justify-center">
            <IoSearch className="text-white text-lg" />
          </button>
        </div>

        {/* Language Selector */}
        <div>
          <select className=" p-1">
            <option value="" disabled selected>Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Icons & Buttons */}
        <div><FaRegHeart className="text-gray-700 text-xl" /></div>
        <div className="cursor-pointer font-bold underline">Login</div>
        <div
        style={style}
        
        className="bg-gray-900 text-white px-4 py-2 rounded-4xl font-bold cursor-pointer">+ Sell</div>
      </nav>
    </header>
    <section>
      <Secnd/>
    </section>
   </>
    
  );
};

export default Header;
