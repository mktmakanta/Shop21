import React from "react";

export const Product = ({ product }) => {
  return (
    <>
      <div key={_id}>
        <div>{product.image}</div>
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
};
