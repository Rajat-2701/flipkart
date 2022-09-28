import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "././Navbar.css";
const Navbar = () => {
  // const { count, setCount } = CartContext();
  const { count, setCount } = useContext(CartContext);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={toggle ? "top-section relative" : "top-section relative min-h-[100vh] !h-0"}>
      <div className="blank"></div>
      <div className={toggle ? "main-section" : "main-section flex-col"}>
        <div className={toggle ? "flipkart lg:!justify-start" : "flipkart !h-[9%]"}>
          <div className="single-image lg:!justify-start">
            <Link to="/" className="shopkart">
              ShopKart
            </Link>
          </div>
        </div>
        <div className={toggle ? "search-bar" : "search-bar !flex flex-col !items-start !ml-0"}>
          <form action="/search" method="get" className={toggle ? "" : "!w-[97%] mb-5"}>
            <div className="search-inputs">
              <div className="search-data">
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  title="Search for products, brands and more"
                  placeholder="Search for products, brands and more"
                />
              </div>
            </div>
          </form>
          <div className={toggle ? "sign" : "sign !ml-auto !mr-auto mb-5"}>
            <div className="sign-inner">
              <div className="sign-inner-two">
                <div>
                  <Link
                    className="sign-btn bg-white text-black border-2 hover:border-2 !border-black hover:!border-white hover:!bg-black hover:!text-white transition-all duration-300 ease-in-out"
                    to="/sign-up"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle ? "login !ml-0" : "login !ml-auto !mr-auto mb-5"}>
            <div className="login-inner">
              <div className="login-inner-two">
                <div>
                  <Link
                    className="login-btn !bg-black hover:!bg-white border-2 hover:border-2 transition-all duration-300 ease-in-out border-white !text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle ? "cart" : "cart !ml-auto !mr-auto !justify-center !items-center"}>
            <div className="cart-inner cursor-pointer">
              <div className="cart-icon">
                <Link to="/cart" className="cart-link">
                  <i className="fas fa-shopping-cart">
                    <span>{count}</span>
                  </i>
                </Link>
                <span>Cart</span>
              </div>
            </div>
          </div>
          <div className={toggle ? "" : "flex flex-col mt-5 items-center justify-center ml-auto mr-auto"}>
            <Link
              to="/all-products"
              className={toggle ? "mr-5 font-medium hover:!text-white" : "mr-0 font-medium hover:!text-white"}
            >
              Products
            </Link>
            <Link
              to="/admin"
              className={toggle ? "mr-5 font-medium hover:!text-white" : "mr-0 font-medium mt-4 hover:!text-white"}
            >
              Admin
            </Link>
          </div>
        </div>
        <div
          className={`${
            toggle
              ? "absolute right-5 top-[18%] transition-all duration-1000 ease-in-out"
              : "absolute right-5 top-[2%] transition-all duration-1000 ease-in-out"
          } block lg:hidden 3xl:hidden `}
          onClick={handleToggle}
        >
          <i className={`${toggle ? "fas fa-bars text-3xl" : "fas fa-times text-3xl"} block lg:hidden `}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
