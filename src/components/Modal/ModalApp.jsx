import React from "react";

import BasicModalApp from "./BasicModal/BasicModalApp";
import ClickOutsideToCloseModalApp from "./ClickOutsideToCloseModal/ClickOutsideToCloseModalApp";
import AnimatedModalApp from "./AnimatedModal/AnimatedModalApp";
import PaymentPage from "./PaymentSuccessfulModal/PaymentPage";
// import Wrapper from "./Wrapper";

const ModalApp = () => {
  return (
    <>
      {/* Ex1: Basic Modal */}
      <BasicModalApp />

      {/*Ex2: Modal with Click Outside to Close  */}
      <ClickOutsideToCloseModalApp />

      {/* Ex3: Animated Modal  */}
      <AnimatedModalApp />

      {/*Ex4: UseCase: Payment successful modal  */}
      <PaymentPage />

      {/* <Wrapper /> */}
    </>
  );
};

export default ModalApp;
