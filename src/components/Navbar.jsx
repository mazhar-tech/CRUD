import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border p-3 flex items-center text-center justify-between px-10 bg-red-100">
      <div className="text-xl font-bold text-red-900">Logo</div>
      <ul className="flex gap-3 ">
        <Link to="/product-list">
          <li className="cursor-pointer hover:font-bold font-medium">
            Products
          </li>
        </Link>
        <Link to="/add-product">
          <li className="cursor-pointer hover:font-bold font-medium">
            Add New Product
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
