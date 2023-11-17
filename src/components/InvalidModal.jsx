import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    borderRadius: "5px",
  },
};
Modal.setAppElement("#root");
const InvalidModal = ({ open, close }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex flex-col gap-2">
        <p className="text-lg">Unavailable Content</p>
        <p>Invalid Content</p>
        <button onClick={close} className="ml-auto text-green-600">
          OK
        </button>
      </div>
    </Modal>
  );
};
export default InvalidModal;
