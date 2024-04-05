import React, { useState } from "react";
import "../assets/css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="px-8 py-4">
        <div className="flex justify-between items-center">
          <span className="text-4xl font-extrabold text-indigo-600">
            blogyX
          </span>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-20 w-8"
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
          } lg:flex flex-col lg:flex-row lg:items-center h-screen lg:h-auto`}
        >
          <ul className="flex flex-col lg:flex-row sm:space-x-4 md:space-x-8 lg:space-x-14 sm:mb-0 mx-auto max-w-3/4 md:max-w-2/4 lg:max-w-1/2">
            {[
              "Kategoriler -->",
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
                className="border rounded px-4 py-2 hover:border-indigo-500 transition-colors bg-slate-100 my-2 sm:my-0"
              >
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-indigo-500"
                >
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
