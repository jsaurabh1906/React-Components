import React from "react";

const IconButton = ({ onClick, icon }) => {
  return (
    <button onClick={onClick} className="p-2 rounded-full hover:bg-blue-50">
      {icon}
    </button>
  );
};

export default IconButton;
