import React from "react";
import cardimage2 from "../../assets/cardimage2.jpg";
const HorizontalCard = () => {
  return (
    <div className="bg-indigo-100 p-20">
      <h2 className="text-xl font-bold text-indigo-800 text-center mb-2">
        Basic Card
      </h2>
      <p className="text-sm text-indigo-600 text-center mb-2">
        Horizontal Card with image - responsive (vertical on small screens)
      </p>
      <div className="bg-white rounded-lg shadow-2xl max-w-lg mx-auto md:flex">
        <img
          src={cardimage2}
          alt="Water Bubble"
          width=""
          className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-r-none"
        />
        <div className="p-6">
          <h3 className="mb-2 text-xl md:text-2xl font-bold text-indigo-700">
            This is Horizontal Card
          </h3>
          <p className="text-sm md:text-md text-indigo-600">
            This is a responsive horizontal card which is vertical on smaller
            screens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
