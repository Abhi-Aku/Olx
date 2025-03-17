import { FaSearch, FaRegUser, FaPlus } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

export default function Header() {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">OLX</div>

      {/* Location Search */}
      <div className="flex items-center bg-gray-100 p-2 rounded-md">
        <IoLocationOutline className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search location"
          className="bg-transparent focus:outline-none"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-1/3 bg-gray-100 p-2 rounded-md">
  <input
    type="text"
    placeholder="Search products"
    className="bg-transparent flex-1 focus:outline-none text-gray-700 placeholder-gray-500"
  />
  <FaSearch className="text-gray-500 bg-black " />
</div>

      {/* Language Selection */}
      <select className="">
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <p className=" underline">Login </p>
        <FaRegUser className="text-gray-600 text-xl cursor-pointer" />
        <BiCategory className="text-gray-600 text-xl cursor-pointer" />
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
          <FaPlus className="mr-2" /> Sell
        </button>
      </div>
    </nav>
  );
}
