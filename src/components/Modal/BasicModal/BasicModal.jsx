import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { modalStyles } from "../modalStyles";

const BasicModal = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));
  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <dialog ref={modalRef} className={modalStyles.dialog}>
      <div className={modalStyles.wrapper}>
        <div className={modalStyles.modalHeader}>
          <h2 className={modalStyles.modalTitle}>Basic Modal</h2>
        </div>
        <p className={modalStyles.modalContent}>
          This is a simple modal using the `dialog` tag.
        </p>
        <button onClick={closeModal} className={modalStyles.modalCloseButton}>
          Close
        </button>
      </div>
    </dialog>
  );
});

export default BasicModal;
