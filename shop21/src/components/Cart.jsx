import React from "react";
import { NavLink } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <NavLink
        to="/"
        className="py-2 px-4 inline-block border border-gray-800 rounded-md"
      >
        Go Back
      </NavLink>
    </div>
  );
}
