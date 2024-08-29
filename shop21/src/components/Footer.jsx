import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 px-20">
      <div className="text-center">Shop21 &copy; {year}</div>
    </footer>
  );
};
