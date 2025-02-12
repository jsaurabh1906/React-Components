import React, { useRef } from "react";
import BasicModal from "./BasicModal";
import { modalStyles } from "../modalStyles";

const BasicModalApp = () => {
  const basicModalRef = useRef(null);

  const openModal = () => {
    basicModalRef.current.openModal();
  };

  return (
    <div className={modalStyles.outerDiv}>
      <h3 className={modalStyles.modalh3}>Basic Modal</h3>
      <BasicModal ref={basicModalRef} />
      <button onClick={openModal} className={modalStyles.modalOpenButton}>
        Open Basic Modal
      </button>
    </div>
  );
};

export default BasicModalApp;
