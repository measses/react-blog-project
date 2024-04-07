import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { useCategory } from "../context/CategoryContext";
import { FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";

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
          <div className="flex justify-center items-center space-x-2">
            <a
              href="https://github.com/measses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl text-white" />
            </a>
            <a
              href="https://www.buymeacoffee.com/mertaraz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiCoffeeCup className="text-3xl text-white" />
            </a>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
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
                <Link to={`/?category=${category}`} className="font-medium">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
