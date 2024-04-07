import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:px-24 py-12 gap-12">
      <div className="text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl lg:text-5xl xl:text-6xl mb-4">
          Sanırım Kayboldunuz!
        </h1>
        <p className="text-white text-lg lg:text-xl xl:text-2xl mb-8">
          Aradığınız sayfa bulunamadı. Ama endişelenmeyin, aşağıdaki buton sizi
          güvenli bir şekilde anasayfaya yönlendirecek.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Anasayfaya Dön
        </Link>
      </div>

      <div className="max-w-lg lg:max-w-xl">
        <img
          src="https://i.ibb.co/G9DC8S0/404-2.png"
          alt="404 Error"
          className="shadow-lg rounded"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
