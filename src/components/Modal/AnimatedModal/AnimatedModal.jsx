import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { modalStyles } from "../modalStyles";

const AnimatedModal = forwardRef((props, ref) => {
  const animateRef = useRef();

  //Info:Fade-in , fade-out animation
  // useImperativeHandle(ref, () => ({
  //   openModal: () => {
  //     animateRef.current.showModal();
  //     animateRef.current.classList.remove("fade-out");
  //     animateRef.current.classList.add("fade-in");
  //   },
  //   closeModal: () => {
  //     animateRef.current.classList.remove("fade-in");
  //     animateRef.current.classList.add("fade-out");

  //     setTimeout(() => {
  //       animateRef.current.close();
  //       animateRef.current.classList.remove("fade-out");
  //     }, 300);
  //   },
  // }));

  //Info: Slide-in , slide-out animation
  useImperativeHandle(ref, () => ({
    openModal: () => {
      animateRef.current.showModal();
      animateRef.current.classList.remove("slide-out-top");
      animateRef.current.classList.add("slide-in-top");
    },
    closeModal: () => {
      animateRef.current.classList.remove("slide-in-top");
      animateRef.current.classList.add("slide-out-top");

      setTimeout(() => {
        animateRef.current.close();
        animateRef.current.classList.remove("slide-out-top");
      }, 300);
    },
  }));

  return (
    <dialog
      ref={animateRef}
      className={`${modalStyles.dialog} backdrop:bg-gray-700/90`}
    >
      <div className={`${modalStyles.wrapper}`}>
        <div className={modalStyles.modalHeader}>
          <h3 className={modalStyles.modalTitle}>Animated Modal</h3>
        </div>
        <p className={modalStyles.modalContent}>This is an animated Modal</p>
        <button
          onClick={() => ref.current.closeModal()}
          className={`${modalStyles.modalCloseButton} w-4/5`}
        >
          Close
        </button>
      </div>
    </dialog>
  );
});

export default AnimatedModal;
