import React from "react";
import cardimage1 from "../../assets/cardimage1.jpg";
const CardWithImage = () => {
  return (
    <div className="bg-violet-100 p-10">
      <h2 className="text-xl font-bold text-violet-800 text-center mb-2">
        Basic Card with Image
      </h2>
      <p></p>
      <div className="bg-white rounded-lg shadow-lg mx-auto w-2/3 md:w-1/3">
        <img src={cardimage1} alt="nature" className="rounded-t-lg" />
        <div className="p-6">
          <h3 className="font-bold mb-2 text-xl md:text-2xl text-violet-700">
            This is card with image
          </h3>
          <p className="text-sm md:text-md text-violet-600 mb-2">
            Slightly Better version of Card
          </p>
          <a
            href="#"
            className="text-violet-600 hover:text-violet-500 underline text-sm"
          >
            Read More 👉🏻
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
