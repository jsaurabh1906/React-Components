import React from "react";

const BasicCard = () => {
  return (
    <div className="bg-purple-100 p-10">
      <h2 className="text-xl font-bold text-purple-800 text-center mb-2">
        Basic Card
      </h2>
      <p className="text-sm text-purple-600 text-center mb-2">
        Card without image
      </p>
      <div className="bg-white p-6 mx-auto max-w-md rounded-lg shadow-lg">
        <h3 className=" mb-2 text-xl md:text-2xl font-bold text-purple-700">
          This is a Basic Card
        </h3>
        <p className="text-sm md:text-md text-purple-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          asperiores consectetur, quaerat tempora eligendi ipsum.
        </p>
      </div>
    </div>
  );
};

export default BasicCard;
