


import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-300 shadow-md absolute top-0 w-screen">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          MyBrand
        </NavLink>

      
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Get Started
            </NavLink>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            className="bg-white border rounded-full px-3 py-1 focus:outline-none"
            placeholder="Search..."
          />
          <button className="ml-2 bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300">
            Search
          </button>
        </div>

       </div>

    
    
    </nav>
  );
}

export default Navbar;
