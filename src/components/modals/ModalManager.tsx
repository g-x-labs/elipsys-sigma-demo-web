"use client";

import React from "react";
import Modal from "../ui/Modal";

const ModalManager: React.FC = () => {
  return (
    <>
      <Modal
        modalId="modal1"
        title="Global Modal 1"
        description="This is the first global modal."
      >
        <p>Global Modal 1 content goes here.</p>
      </Modal>
      <Modal
        modalId="modal2"
        title="Global Modal 2"
        description="This is the second global modal."
      >
        <p>Global Modal 2 content goes here.</p>
      </Modal>
    </>
  );
};

export default ModalManager;
