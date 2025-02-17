import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {" "}
      <header className="bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to React UI Kit
        </h1>
        <p className="text-lg md:text-xl">
          A collection of beautifully designed, reusable React components.
        </p>
        <Link
          to="/components"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Explore Components
        </Link>
      </header>
    </>
  );
};

export default HeroSection;
