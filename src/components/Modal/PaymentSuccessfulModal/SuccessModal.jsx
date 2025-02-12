import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { modalStyles } from "../modalStyles";

const SuccessModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen, onClose]);
  return (
    <dialog
      ref={modalRef}
      className={`${modalStyles.dialog} backdrop:bg-gray-700/90`}
    >
      <div className={`${modalStyles.wrapper}`}>
        <FaCheckCircle className="text-4xl text-green-500 my-4 animate-bounce" />
        <div className={""}>
          <h3 className={`{modalStyles.modalTitle} text-green-500 text-xl `}>
            Payment Successful
          </h3>
        </div>
        <p className={modalStyles.modalContent}>Thank You for your purchase!</p>
        <button
          onClick={onClose}
          className={`w-2/5 m-4 p-2 text-green-700 font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-md transition-colors duration-300`}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default SuccessModal;
