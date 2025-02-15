import React, { useState } from "react";
import { FaShare, FaChevronDown, FaHeart } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const RecipeReviewCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-rose-100 p-10 md:p-20">
      <h2 className="text-2xl font-bold mb-2 text-center text-rose-800">
        Recipe Review Card
      </h2>
      <p className="text-center text-sm text-rose-500 mb-4">
        With collapsible section for ingredients and instructions
      </p>
      <div className="max-w-sm mx-auto bg-white shadow-lg shadow-rose-300 rounded-lg overflow-hidden border-2 border-rose-900">
        {/* Header */}
        <div className="flex items-center space-x-10">
          <div className="h-10 w-10 bg-rose-400 text-white text-2xl font-semibold rounded-full m-2 flex justify-center items-center">
            S
          </div>
          <div className="ml-4">
            <p className="text-md text-rose-700 font-semibold">
              Pesto Pasta with Sliced Tomatoes
            </p>
            <span className="text-sm text-gray-500">February 14, 2025</span>
          </div>
          <button className="text-xl text-rose-700 hover:text-rose-500 transition-colors duration-300">
            <FaEllipsisVertical />
          </button>
        </div>
        {/* Image */}
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
          alt="Pesto Pasta"
          className="w-full h-48 object-cover"
        />
        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-gray-700 tracking-wide">
            This fresh and vibrant pesto pasta with sliced tomatoes is a simple
            yet flavorful dish. It’s perfect for a quick lunch or dinner.
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center justify-between p-4 space-x-4 ">
          <div className="space-x-4">
            <button>
              <FaHeart
                size={24}
                className="text-rose-500 hover:text-rose-600 transition-all duration-300"
              />
            </button>
            <button>
              <FaShare
                size={24}
                className="text-rose-300 hover:text-rose-400 transition-all duration-300"
              />
            </button>
          </div>
          <button
            onClick={handleExpandClick}
            className="text-gray-500 hover:text-gray-700 flex items-center space-x-1"
          >
            <span className={`text-sm text-rose-600`}>
              {expanded ? "Show Less" : "Show More"}
            </span>
            <FaChevronDown
              size={20}
              className={`text-rose-600 transition-transform duration-300 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
        {/* Expandable Section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 border-t bg-gray-50">
                <h3 className="font-semibold mb-2 text-rose-600">
                  Ingredients:
                </h3>
                <ul className="text-gray-600 list-disc list-inside text-sm">
                  <li>8 oz pasta</li>
                  <li>1/2 cup pesto sauce</li>
                  <li>1 cup cherry tomatoes, sliced</li>
                  <li>1/4 cup grated parmesan</li>
                  <li>Salt & pepper to taste</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2 text-rose-600">
                  Instructions:
                </h3>
                <ol className="text-gray-600 list-decimal list-inside text-sm">
                  <li>Cook pasta according to package instructions.</li>
                  <li>Drain and mix with pesto sauce.</li>
                  <li>Add sliced cherry tomatoes and parmesan.</li>
                  <li>Season with salt and pepper.</li>
                  <li>Serve warm and enjoy!</li>
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecipeReviewCard;
