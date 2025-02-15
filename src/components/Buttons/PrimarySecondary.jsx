import React from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";
import Button from "./ReusableItems/Button";

const PrimarySecondary = () => {
  return (
    <ButtonLayout
      heading="Primary & Secondary Buttons"
      info=" Used for main and secondary actions in a UI."
    >
      <Button
        label="Save"
        variant="primary"
        onClick={() => console.log("Save button clicked")}
      />
      <Button
        label="Cancel"
        variant="secondary"
        onClick={() => console.log("Cancel Button Clicked")}
      />
    </ButtonLayout>
  );
};

export default PrimarySecondary;
