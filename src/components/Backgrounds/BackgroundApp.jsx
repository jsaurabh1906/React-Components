import React from "react";
import SimpleBg from "./SimpleBg";
import GradientBg from "./GradientBg";
const BackgroundApp = () => {
  return (
    <div>
      {/* Simple Background */}
      <SimpleBg />
      {/* Gradient Background */}
      <GradientBg />
      {/* Animated Backgrounds */}
    </div>
  );
};

export default BackgroundApp;
