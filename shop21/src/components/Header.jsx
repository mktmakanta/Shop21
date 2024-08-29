import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="">
      <nav className="bg-gray-800 text-white p-4 px-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-1">
            Shop21{" "}
            <div className="w-16">
              {" "}
              <img className="w-full h-full" src="src/assets/logo.png" alt="" />
            </div>
          </div>

          {/* Hamburger  */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex ">
            <div className="space-x-6">
              <FontAwesomeIcon icon={faCartShopping} />
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="md:hidden text-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            repellat optio ducimus veritatis sunt? Animi voluptates quod facilis
            fugit voluptatum officia tempora perferendis magni corporis
            perspiciatis vero inventore, molestias explicabo!
          </div>
        )}
      </nav>
    </header>
  );
};
