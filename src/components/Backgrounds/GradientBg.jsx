import React, { useState } from "react";
import { bgStyles } from "./bgStyles";
import Button from "../Buttons/ReusableItems/Button";
import { generateRandomBackground } from "../../utils/randomBackground";

const GradientBg = () => {
  const generateRandomGradientBg = () => {
    const gradientTypes = ["linear", "radial", "conic"];
    const randomType =
      gradientTypes[Math.floor(Math.random() * gradientTypes.length)];
    const randomDegree = Math.floor(Math.random() * 360);
    const color1 = generateRandomBackground();
    const color2 = generateRandomBackground();
    const color3 = generateRandomBackground();

    if (randomType === "linear") {
      return `linear-gradient(${randomDegree}deg, ${color1}, ${color2})`;
    } else if (randomType === "radial") {
      return `radial-gradient(circle, ${color1}, ${color2}, ${color3})`;
    } else {
      return `conic-gradient(from ${randomDegree}deg, ${color1}, ${color2}, ${color3})`;
    }
  };

  const [bgGradient, setBgGradient] = useState(generateRandomGradientBg());

  const handleClick = () => {
    setBgGradient(generateRandomGradientBg());
  };

  return (
    <div
      className={bgStyles.bgsOuterDiv}
      style={{ backgroundImage: bgGradient }}
    >
      <h3 className={bgStyles.bgsHeading}>Gradient Background</h3>
      <p className={`${bgStyles.bgsInfo} flex flex-col `}>
        <span>
          A Gradient background generated randomly with a variety of colors and
          types.
        </span>
        <span>
          <code className="mb-4">code: {bgGradient}</code>
        </span>
      </p>
      <Button label="Generate New BG" onClick={handleClick} />
    </div>
  );
};

export default GradientBg;
