import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Ratings } from "../components/Ratings";

export const ProductScreen = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  const idToNumber = Number(productId);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => {
        setProductsData(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const currentProduct = productsData.find((p) => p.id === idToNumber);
  // console.log(currentProduct);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>Product not found</div>;

  return (
    <div className="py-10 text-gray-700">
      <NavLink
        to="/"
        className="py-2 px-4 inline-block border border-gray-800 rounded-md"
      >
        Go Back
      </NavLink>

      <div className="mt-8 md:grid grid-cols-8 gap-4">
        <div className="col-span-3  h-96">
          <img
            className="w-full h-full rounded-lg"
            src={`/images/${currentProduct.image}.jpg`}
            alt=""
          />
        </div>
        <div className="col-span-3">
          <div className="py-5 px-2 border-b-2 border-gray-500/30 text-4xl font-semibold">
            {currentProduct.name}
          </div>
          <div className="py-4 px-2 border-b-2 border-gray-500/30 ">
            <Ratings
              value={currentProduct.rating}
              text={currentProduct.numReviews}
            />
          </div>
          <div className="py-4 px-2 border-b-2 border-gray-500/30 font-medium ">
            Price: ${currentProduct.price}
          </div>
          <div className="py-4 px-2 ">{currentProduct.description}</div>
        </div>
        <div className="col-span-2 ">
          <div className="  shadow-lg border inline-block border-gray-500/40 font-medium ">
            <div className="p-4 border-b-2 space-x-10 border-gray-500/30">
              <span>Price:</span>
              <span>${currentProduct.price}</span>
            </div>
            <div className="p-4 border-b-2 space-x-10 border-gray-500/30">
              <span>Status:</span>
              <span>
                {currentProduct.countInStock >= 1
                  ? "In Stock "
                  : "Out of stock"}
              </span>
            </div>
            <div className="p-4 border-b-2 border-gray-500/30">
              <button
                disabled={currentProduct.countInStock === 0}
                className="p-3 inline-block text-sm disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-gray-800 text-white rounded-md"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
