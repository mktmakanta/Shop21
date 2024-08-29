import React, { useState, useEffect } from "react";
import { Product } from "../components/Product.jsx";

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <h1 className="text-5xl font-bold my-5">Latest products</h1>
      <div className="cards flex flex-wrap bg-white ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
