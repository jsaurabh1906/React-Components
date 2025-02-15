import React from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";

const FloatingButton = () => (
  <ButtonLayout
    heading="Floating Button"
    info="Common in mobile UIs for quick access to actions."
  >
    <p>
      See at bottom right{" "}
      <span className="inline-block rotate-45 text-xl bg-blue-500 rounded-full">
        👉
      </span>
    </p>
    <button className="fixed bottom-5 right-5 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600">
      +
    </button>
  </ButtonLayout>
);

export default FloatingButton;
