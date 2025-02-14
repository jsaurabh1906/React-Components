import React from "react";
import { productData } from "../../utils/cardsData";
const ProductCard = () => {
  return (
    <div className="bg-slate-100 p-10 md:p-20">
      {" "}
      <h2 className="text-xl font-bold text-slate-800 text-center mb-2">
        Product Card
      </h2>
      <p className="text-sm text-slate-600 text-center mb-2">
        A card for displaying products in an online store.
      </p>
      <div className="bg-white mx-auto max-w-md rounded-lg shadow-lg overflow-hidden">
        <img
          src={productData.image}
          alt={productData.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-700 mb-2">
            {productData.name}
          </h3>
          <p className="text-slate-600">{productData.description}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-slate-600 font-bold transition-transform duration-300 hover:scale-110">
              ₹ {productData.price}
            </span>
            <button className="bg-slate-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-600 transition-all duration-300 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
