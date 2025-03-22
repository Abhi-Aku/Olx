import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Prodect = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 sticky top-0 h-full">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <NavLink to="/pageOne" className="hover:text-gray-300">Page One</NavLink>
          </li>
          <li>
            <NavLink to="/pageTwo" className="hover:text-gray-300">Page Two</NavLink>
          </li>
        </ul>
      </div>

      {/* Right-side Content */}
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Prodect;
