import React, { useRef } from "react";
import { modalStyles } from "../modalStyles";
import AnimatedModal from "./AnimatedModal";

const AnimatedModalApp = () => {
  const animatedModalRef = useRef(null);

  const openModal = () => {
    animatedModalRef.current.openModal();
  };

  return (
    <div className={modalStyles.outerDiv}>
      <h3 className={modalStyles.modalh3}>Animated Modal</h3>
      <AnimatedModal ref={animatedModalRef} />
      <button onClick={openModal} className={modalStyles.modalOpenButton}>
        Open Animated Modal
      </button>
    </div>
  );
};

export default AnimatedModalApp;
