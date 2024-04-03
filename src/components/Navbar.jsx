import React from "react";
import "../assets/css/Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="px-8 py-4">
        <span className="text-4xl font-extrabold flex mt-14 mx-40 text-indigo-600 ">
          blogyX
        </span>
        <div className="flex h-screen justify-center items-center">
          <ul className="flex space-x-14 mb-[850px] ">
            {[
              "Kategoriler --->",
              "Teknoloji",
              "Yazılım",
              "Sanat",
              "Eğitim",
              "Kişisel Gelişim",
              "Spor",
              "Oyun",
            ].map((category) => (
              <li className="border rounded px-4 py-2 hover:border-indigo-500 transition-colors bg-slate-300">
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
