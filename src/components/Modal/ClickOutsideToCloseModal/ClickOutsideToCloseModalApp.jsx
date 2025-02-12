import React from "react";
import { modalStyles } from "../modalStyles";
import ClickOutsideModal from "./ClickOutsideModal";

const ClickOutsideToCloseModalApp = () => {
  const modalRef = React.useRef(null);
  const openModal = () => {
    modalRef.current.openModal();
  };
  return (
    <div className={modalStyles.outerDiv}>
      <h3 className={modalStyles.modalh3}>
        Open Modal and Click outside anywhere to close Modal
      </h3>
      <ClickOutsideModal ref={modalRef} />
      <button onClick={openModal} className={modalStyles.modalOpenButton}>
        Open Modal
      </button>
    </div>
  );
};

export default ClickOutsideToCloseModalApp;
