import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="mt-20 ml-10 flex items-center justify-start">
      <h2>Your cart is empty</h2>
      <div className="text-white font-normal capitalize ml-16">
        <Link
          to="/all-products"
          className="pt-2 pb-2 pl-3 pr-3 bg-green-600 hover:bg-red-500 hover:text-white transition-all duration-800 ease-in-out"
        >
          Back to products
        </Link>
      </div>
    </div>
  );
};

export default Cart;
