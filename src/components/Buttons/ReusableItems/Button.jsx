import React from "react";
import { buttonStyles } from "./buttonStyles";

console.log(buttonStyles["primary"]);
const Button = ({ label, onClick, variant = "primary", ...rest }) => {
  return (
    <button
      onClick={onClick}
      variant="primary"
      className={`${buttonStyles.baseStyles} ${buttonStyles[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
