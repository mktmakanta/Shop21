import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Ratings } from "./Ratings";

export const Product = ({ product }) => {
  return (
    <>
      <div className="w-80 p-4 ">
        <div className="h-72 rounded-lg">
          <img
            className="w-full h-full rounded-lg"
            src={`/images/${product.image}.jpg`}
            alt=""
          />
        </div>
        <div className="my-5 bg-blue-50 p-4 rounded-md">
          <NavLink
            to={`/product/${product.id}`}
            className="font-medium text-xl "
          >
            {product.name}
          </NavLink>
          <Ratings value={product.rating} text={product.numReviews} />
          <p>${product.price}</p>
        </div>
      </div>
      <Outlet />
    </>
  );
};
