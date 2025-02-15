import React, { useState } from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";
import { buttonStyles } from "./ReusableItems/buttonStyles";
import { FaCircle } from "react-icons/fa";

const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);
  const [isOn, setIsOn] = useState(false);
  return (
    <ButtonLayout
      heading="Toggle Button"
      info="Used for toggling dark mode, sound on/off, or other toggle settings. "
    >
      <button
        onClick={() => setEnabled(!enabled)}
        className={`${buttonStyles.baseStyles} ${
          enabled ? buttonStyles.primary : buttonStyles.secondary
        }}`}
      >
        {enabled ? "Enabled" : "Disabled"}
      </button>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`${
          isOn ? "bg-blue-500" : "bg-gray-200 transition-all duration-300"
        } w-16 h-8 rounded-full p-1 flex items-center`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 
            ${isOn ? "translate-x-8" : "translate-x-0"}`}
        />
      </button>
    </ButtonLayout>
  );
};

export default ToggleButton;
