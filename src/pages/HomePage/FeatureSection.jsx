import React from "react";
import { Link } from "react-router-dom";
import { componentsList } from "../../utils/homePageUtils";

const FeatureSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-800">
        Available Components
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 place-items-center">
        {componentsList.slice(0, 6).map((item, index) => (
          <Link
            key={index}
            to={`/components/${item.path}`}
            className="group w-56 h-40 rounded-3xl bg-gray-100 shadow-lg shadow-blue-500/50  hover:shadow-blue-500
                       flex flex-col items-center justify-center text-center p-6 
                       transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
              {item.name}
            </h3>
            <p className="mt-2 text-md text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
