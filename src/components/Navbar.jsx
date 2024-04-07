import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { useCategory } from "../context/CategoryContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedCategory } = useCategory();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-950 text-white">
        <div className="flex justify-between items-center">
          <a href="/">
            <span className="text-4xl font-extrabold">blogyX</span>
          </a>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center h-screen lg:h-auto transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row sm:space-x-4 md:space-x-8 lg:space-x-14 sm:mb-0 mx-auto">
            {[
              "Teknoloji",
              "Yazılım",
              "Sanat",
              "Eğitim",
              "Kişisel Gelişim",
              "Spor",
              "Oyun",
            ].map((category, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded px-4 py-2 hover:bg-indigo-500 hover:text-white transition-colors duration-300 my-2 sm:my-0"
                onClick={() => handleCategoryClick(category)}
              >
                <a href="#" className="font-medium">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
