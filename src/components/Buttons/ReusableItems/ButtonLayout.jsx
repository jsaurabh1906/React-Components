import React from "react";

const ButtonLayout = ({ heading, info, children }) => {
  return (
    <div className=" flex flex-col justify-center items-center p-4  m-2 border-2 border-blue-500 rounded-md">
      <h3 className="text-2xl font-semibold text-blue-700">{heading}</h3>
      <p className="text-sm md:text-lg text-blue-500">{info}</p>
      <div className="text-md md:text-lg flex flex-col md:flex-row justify-center items-center gap-4 p-4">
        {children}
      </div>
    </div>
  );
};

export default ButtonLayout;
