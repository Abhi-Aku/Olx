import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-2 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">OLX</div>

      {/* Search Section */}
      <div className="flex items-center border-2 border-gray-400 rounded-lg overflow-hidden">
        {/* Location Selector */}
        <div className="flex items-center px-4 py-2 border-r">
          <IoSearch className="text-gray-500" />
          <span className="ml-2">India</span>
          <SlArrowDown className="ml-2 text-gray-500" />
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder='Search "Bikes"'
          className="px-4 py-2 w-80 outline-none"
        />

        {/* Search Button */}
        <button className="px-4 bg-gray-800 text-white">
          <IoSearch className="text-xl" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div className="flex items-center cursor-pointer">
          <span className="mr-2">ENGLISH</span>
          <SlArrowDown className="text-gray-500" />
        </div>

        {/* Wishlist Icon */}
        <FaHeart className="text-xl text-gray-600 cursor-pointer" />

        {/* Login Link */}
        <span className="text-gray-800 font-semibold underline cursor-pointer">
          Login
        </span>

        {/* Sell Button */}
        <button className="flex items-center px-4 py-2 bg-white border-2 border-yellow-400 rounded-full shadow-md text-gray-800 font-semibold hover:shadow-lg transition-all">
          <span className="mr-2">+ SELL</span>
        </button>
      </div>
    </div>
  );
}
