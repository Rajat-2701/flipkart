import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/getProductList";
    const getProducts = () => {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => setProducts(actualData?.data));
    };
    getProducts();
  }, []);
  console.log("products are:", products);

  return (
    <div className="bg-white">
      {products?.map((item, id) => {
        return (
          <div key={id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <strong>{item.category}</strong>
                <p className="card-text">{item.description}</p>
                <p>{item.rating.slice(0, 3)}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
