import React, { useState } from "react";
import { modalStyles } from "../modalStyles";
import SuccessModal from "./SuccessModal";

const PaymentPage = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPaymentSuccess(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleClose = () => {
    setIsPaymentSuccess(false);
  };

  return (
    <div className={modalStyles.outerDiv}>
      <h3 className={modalStyles.modalh3}>Usecase: Payment Page</h3>
      <p className={`${modalStyles.modalContent} mb-2`}>Click Below To Pay</p>

      <button
        onClick={handlePayment}
        className={`${modalStyles.modalOpenButton} flex items-center justify-center`}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mx-auto"></span>
        ) : (
          "Pay Now"
        )}
      </button>

      {isPaymentSuccess && (
        <SuccessModal isOpen={isPaymentSuccess} onClose={handleClose} />
      )}
    </div>
  );
};

export default PaymentPage;
