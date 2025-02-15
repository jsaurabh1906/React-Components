import React from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";

const OutlinedButtons = () => {
  return (
    <ButtonLayout heading="Outlined Buttons">
      <button className="border-2 border-blue-800 hover:border-blue-600 rounded py-2 px-5 text-blue-800 hover:text-blue-600 font-bold transition-all duration-500">
        Login
      </button>
      <button className="bg-blue-100 hover:bg-blue-50 font-semibold text-blue-800 rounded-full py-2 px-5 shadow-md hover:shadow-2xl transition-all duration-500">
        Logout
      </button>
    </ButtonLayout>
  );
};

export default OutlinedButtons;
