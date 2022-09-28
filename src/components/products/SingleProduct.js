import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div className="mt-20 ml-10 flex items-center">
      <h1>SingleProduct</h1>
      <div className="ml-10 text-white">
        <Link
          to="/all-products"
          className="pt-2 pb-2 rounded-md pl-3 pr-3 bg-red-500 hover:bg-green-500 hover:text-white transition-all duration-800 ease-in-out"
        >
          Back to products
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
