import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center py-4 mt-auto">
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
          className="bg-slate-900"
        >
          <CiCoffeeCup className="text-3xl text-white" />
        </a>
      </div>
      <p>&copy; 2024 blogyX -- Mert Araz</p>
    </footer>
  );
}

export default Footer;
