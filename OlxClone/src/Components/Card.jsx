import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="border border-gray-300 p-2 rounded-lg shadow-md relative w-64">
      {/* Product Image */}
      <img
        className="h-40 w-full object-cover rounded-md"
        src="https://i.ytimg.com/vi/0kJHbvrTx64/sddefault.jpg"
        alt="Product"
      />

      {/* Price */}
      <h1 className="flex items-center text-lg font-semibold mt-2">
        <FaRupeeSign className="mr-1" /> 20,00,000
      </h1>

      {/* Heart Icon (Favorite) */}
      <div className="absolute top-6 right-6 bg-white p-1 rounded-full shadow-md">
        <FaRegHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
