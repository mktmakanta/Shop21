import React from "react";
import { Product } from "../components/Product";

export const HomeScreen = () => {
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <h1>Latest products</h1>
      {products.products.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};
