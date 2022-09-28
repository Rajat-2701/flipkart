import React, { createContext, useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "././Products.css";
import grocery from "../../../src/product_images/SmartPhone/1663006967-0.jpeg";
const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const { handleCount, products } = useContext(CartContext);
  // useEffect(() => {
  //   const url = "http://127.0.0.1:8000/api/getProductList";
  //   const getProducts = () => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((actualData) => setProducts(actualData?.data));
  //   };
  //   getProducts();
  // }, []);

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="products-listing mt-20 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:ml-10 xl:ml-5 2xl:ml-10 3xl:ml-28">
        {products?.map((item, id) => {
          return (
            <div
              className="card xl:w-[20rem]"
              style={{
                width: "27rem",
                minHeight: "200px",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
              key={id}
            >
              <div className="card-body">
                {/* <Carousel> */}
                <Carousel dots={false}>
                  {item.images?.map((item, id) => {
                    const myImg = item.split(" ").join("");
                    console.log("image", myImg === "product_images/SmartPhone/1663006967-0.jpeg");
                    return (
                      <img
                        src={require("../../../src/product_images/SmartPhone/1663006967-0.jpeg")}
                        key={id}
                        className="card-img-top"
                        alt="image"
                      />
                    );
                  })}
                </Carousel>

                {/* </Carousel> */}
                <h5 className="card-title mt-3 text-black text-lg font-semibold">{item.title}</h5>
                <ul className="card-text text-gray-600 font-normal list-disc">
                  <li className="text-blue-600 font-medium mb-2 uppercase">{item.category}</li>
                  <li className="text-gray-600 leading-7">{item.description}</li>
                </ul>
                <p className="card-text">{item.price}</p>
                <div className="flex items-start justify-around mt-10">
                  <Link to="/products/single-product" className="bg-blue-600 pt-2 pb-2 pl-4 pr-4 text-white rounded-md">
                    More Info
                  </Link>
                  <div className="bg-green-600 pt-2 pb-2 pl-4 pr-4 text-white rounded-md" onClick={handleCount}>
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
