import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center py-4 mt-auto">
      <a href="https://github.com/measses" target="_blank">
        <FaGithub className="text-2xl text-white mx-auto mb-2" />
      </a>
      <p>&copy; 2024 blogyX -- Mert Araz</p>
    </footer>
  );
}

export default Footer;
