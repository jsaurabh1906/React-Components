import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { modalStyles } from "../modalStyles";

const ClickOutsideModal = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      console.log("clicked outside modalRef:", modalRef.current);
      console.log("clicked outside e:", e.target);
      modalRef.current.close();
    }
  };

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <dialog ref={modalRef} className={modalStyles.dialog} onClick={closeModal}>
      <div className={modalStyles.wrapper}>
        <div className={modalStyles.modalHeader}>
          <h2 className={modalStyles.modalTitle}>Click Outside to Close</h2>
        </div>
        <p className={modalStyles.modalContent}>
          Click anywhere outside this modal to close it.
        </p>
      </div>
    </dialog>
  );
});

export default ClickOutsideModal;
