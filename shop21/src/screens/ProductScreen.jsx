import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
// import { Ratings } from "../components/Ratings";

export const ProductScreen = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProductsData(data.products));
  }, []);

  const { productId } = useParams();

  const currentProduct = productsData.find((p) => p.id === productId);
  console.log(currentProduct);

  return (
    <>
      <NavLink to="/" className="py-2 px-4 border border-gray-800 rounded-md">
        Go Back
      </NavLink>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quaerat perferendis earum alias ut sed voluptate enim natus unde,
        aliquid, velit veniam autem ex tenetur ullam assumenda. Sunt, asperiores
        atque.
      </div>
    </>
  );
};
