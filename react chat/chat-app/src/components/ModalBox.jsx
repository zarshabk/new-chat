import { Button, Modal } from "flowbite-react";
import { useState } from "react";
const ModalBox = ({ openModal, setOpenModal, children, title }) => {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="overflow-y-scroll h-[400px]"
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">{children}</div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBox;
