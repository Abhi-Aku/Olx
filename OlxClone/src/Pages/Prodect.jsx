import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Card from "../Components/Card";

export const Product = () => {
  const [openSection, setOpenSection] = useState(null);

  const categories = [
    { name: "All Categories", path: "/categories" },
    { name: "Mobiles", path: "/categories/mobiles" },
    { name: "Mobile Phones", path: "/categories/mobile-phones" },
    { name: "Accessories", path: "/categories/accessories" },
    { name: "Tablets", path: "/categories/tablets" }
  ];

  const sections = ["Categories", "Locations", "Brands", "Price Range"]; // Example sections

  return (
    <div className="flex gap-5 p-5">
      {/* Left Sidebar - Filters */}
      <div className="w-1/4 bg-white px-4 py-3 border border-gray-300">
        {sections.map((section, index) => (
          <div key={index} className="mb-3">
            <button
              className="w-full flex justify-between items-center font-bold text-gray-900"
              onClick={() => setOpenSection(openSection === index ? null : index)}
            >
              {section}
              {openSection === index ? <SlArrowUp /> : <SlArrowDown />}
            </button>
            {openSection === index && (
              <div className="py-2 text-gray-700">
                {categories.map((category, idx) => (
                  <NavLink
                    key={idx}
                    to={category.path}
                    className={({ isActive }) =>
                      `block py-1 px-2 text-black cursor-pointer hover:text-blue-500 hover:bg-blue-100 rounded-md ${
                        isActive ? "font-bold text-blue-600" : ""
                      }`
                    }
                  >
                    -- {category.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side - Product Cards */}
      <div className="w-3/4 grid grid-cols-4 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Product;
