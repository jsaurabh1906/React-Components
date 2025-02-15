import React from "react";
import BasicButton from "./BasicButton";
import Button from "./ReusableItems/Button";
import PrimarySecondary from "./PrimarySecondary";
import IconType from "./IconType";
import LoadingButton from "./LoadingButton";
import FloatingButton from "./FloatingButton";
import ToggleButton from "./ToggleButton";
import GradientButton from "./GradientButton";
import OutlinedButtons from "./OutlinedButtons";

const ButtonsApp = () => {
  return (
    <>
      {/* Ex1: Simple Button */}
      <BasicButton />
      {/* Ex2: Reusable Primary and Secondary Buttons */}
      <PrimarySecondary />
      {/* Ex3: Icon Buttons */}
      <IconType />
      {/* Ex4: Loading Button */}
      <LoadingButton label="submit" />
      {/* Ex5: Floating Button  */}
      <FloatingButton />
      {/* Ex6: Toggle Button */}
      <ToggleButton />
      {/* Ex7: Outlined Buttons */}
      <OutlinedButtons />
      {/* Ex:8 Gradient Button */}
      <GradientButton />
    </>
  );
};

export default ButtonsApp;
