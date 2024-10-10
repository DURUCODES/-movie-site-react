import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed  inset-0 flex items-center justify-center z-50 w-full bg-black bg-opacity-50">
      <div className="bg-white  rounded-lg px-5 md:px-10 py-10 relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          &times; {/* Close icon */}
        </button>
        <div className="modal-content opacity-100 translate-y-0 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
