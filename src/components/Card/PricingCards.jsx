import React from "react";
import { pricingPlans as plans } from "../../utils/cardsData";
import { FaCheck } from "react-icons/fa";
const PricingCards = () => {
  return (
    <div className="bg-pink-100 p-10">
      <h2 className="text-2xl font-bold mb-2 text-center text-pink-800">
        Pricing Cards
      </h2>
      <p className="text-center text-sm text-pink-500 mb-4"></p>
      {/* min-h-screen */}
      <div className="mx-auto flex flex-col md:flex-row gap-6 justify-center items-center bg-pink-50 p-6 rounded-2xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full max-w-xs p-6 rounded-2xl border-2 shadow-lg ${plan.border} transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <h3 className="text-2xl font-bold text-pink-800 text-center tracking-wide">
              {plan.name}
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 text-center mt-3">
              {plan.price}
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-base">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 my-2 text-pink-700 font-semibold"
                >
                  <FaCheck /> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-4 w-full py-2 text-white font-semibold rounded-full ${plan.gradient} hover:opacity-90 transition-opacity`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default PricingCards;
