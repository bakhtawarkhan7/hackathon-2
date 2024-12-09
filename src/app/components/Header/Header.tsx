
import React from "react";

import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Foodtuck
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Menu</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Pages</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Shop</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <FaSearch className="cursor-pointer hover:text-gray-300" size={20} />
          <FaUser className="cursor-pointer hover:text-gray-300" size={20} />
          <FaShoppingCart className="cursor-pointer hover:text-gray-300" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;

  