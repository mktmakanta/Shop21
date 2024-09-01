import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Ratings } from "../components/Ratings";

export const ProductScreen = () => {
  const [productsData, setProductsData] = useState([]);
  const { productId } = useParams();
  const idToNumber = Number(productId);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProductsData(data.products));
  }, []);

  const currentProduct = productsData.find((p) => p.id === idToNumber);
  console.log(currentProduct);

  return (
    <div>
      <NavLink to="/" className="py-2 px-4 border border-gray-800 rounded-md">
        Go Back
      </NavLink>
      <div className="w-72 ">
        <img
          className="w-full h-full rounded-lg"
          src={`/images/${currentProduct.image}.jpg`}
          alt=""
        />
      </div>
      <div>
        <div>{currentProduct.name}</div>
        <div>
          <Ratings />
        </div>
        <div>Price: ${currentProduct.price}</div>
        <div>{currentProduct.description}</div>
      </div>
      <div>
        <div>
          <span>Price:</span>
          <span>${currentProduct.price}</span>
        </div>
        <div>
          <span>Status:</span>
          <span>
            {currentProduct.countInStock >= 1 ? "In Stock " : "Out of stock"}
          </span>
        </div>
        <div>
          <button className="py-2 px-5 bg-gray-800 text-white rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
