// import React, { useRef } from "react";
// import { modalStyles } from "./modalStyles";
// import BasicModal from "./BasicModal/BasicModal";
// import ClickOutsideModal from "./ClickOutsideToCloseModal/ClickOutsideModal";

// const Wrapper = () => {
//   const basicModalRef = useRef(null);
//   const modalRef = useRef(null);

//   const openModal = () => {
//     basicModalRef.current.openModal();
//     // modalRef.current.openModal();
//   };
//   const openModal2 = () => {
//     // basicModalRef.current.openModal();
//     modalRef.current.openModal();
//   };
//   return (
//     <div className={modalStyles.outerDiv}>
//       <h2 className={modalStyles.modalh3}>Basic Modal</h2>
//       <BasicModal ref={basicModalRef} />
//       <ClickOutsideModal ref={modalRef} />
//       <button onClick={openModal} className={modalStyles.modalOpenButton}>
//         Open Basic Modal
//       </button>
//       <hr />
//       <button onClick={openModal2} className={modalStyles.modalOpenButton}>
//         Open Modal
//       </button>
//     </div>
//   );
// };

// export default Wrapper;
// //
