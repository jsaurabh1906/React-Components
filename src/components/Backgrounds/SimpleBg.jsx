import React from "react";
import { bgStyles } from "./bgStyles";
import { generateRandomBackground } from "../../utils/randomBackground";
import Button from "../Buttons/ReusableItems/Button";

const SimpleBg = () => {
  const [bgColor, setBgColor] = React.useState(generateRandomBackground());

  const handleClick = () => {
    setBgColor(generateRandomBackground());
  };

  return (
    <div className={bgStyles.bgsOuterDiv} style={{ backgroundColor: bgColor }}>
      <h3 className={bgStyles.bgsHeading}>Simple Background</h3>
      <p className={`${bgStyles.bgsInfo} flex flex-col `}>
        <span>A simple background generated with different hex values</span>
        <span>Background Color: {bgColor}</span>
      </p>
      <Button label={"Generate New BG"} onClick={handleClick} />
    </div>
  );
};

export default SimpleBg;
