import React from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";

const BasicButton = () => {
  return (
    <ButtonLayout
      heading="Basic Buttons"
      info="Button Types: Text, Contained And Outlined"
    >
      <button className="text-blue-700 hover:bg-blue-50 py-2 px-5 rounded">
        Text
      </button>
      <button className="bg-blue-700 text-white py-2 px-5 rounded hover:bg-blue-600">
        Contained
      </button>
      <button className="border-2 border-blue-700 text-blue-700 py-2 px-5 rounded hover:bg-blue-50">
        Outlined
      </button>
    </ButtonLayout>
  );
};

export default BasicButton;
