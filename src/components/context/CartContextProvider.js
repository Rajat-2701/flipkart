import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
const CartContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [addData, setAddData] = useState([]);

  //   function for increasing count of cart
  const handleCount = () => {
    setCount(count + 1);
    alert("Item added successfully");
  };
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/getProductList";
    const getProducts = () => {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => setProducts(actualData?.data));
    };
    getProducts();
  }, []);
  console.log("product", products);

  return (
    <CartContext.Provider value={{ count, handleCount, setCount, products }}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
