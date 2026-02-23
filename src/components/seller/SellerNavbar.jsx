import React from "react";
import {FaBoxOpen,FaShoppingCart,FaStar,FaComments,FaUserCircle,} from "react-icons/fa";

export const SellerNavbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="text-2xl font-bold text-[#FF3F6C]">
        Seller Panel
      </div>

      {/* Menu Items */}
      <ul className="flex items-center gap-8 font-medium text-gray-700">

        <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF3F6C] transition">
          <FaBoxOpen />
          Manage Products
        </li>

        <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF3F6C] transition">
          <FaShoppingCart />
          View Sales
        </li>

        <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF3F6C] transition">
          <FaStar />
          Reviews
        </li>

        <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF3F6C] transition">
          <FaComments />
          Respond Query
        </li>

      </ul>

      {/* Profile */}
      <div className="text-2xl text-gray-600 cursor-pointer hover:text-[#FF3F6C]">
        <FaUserCircle />
      </div>

    </nav>
  );
};