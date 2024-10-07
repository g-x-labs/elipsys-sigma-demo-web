"use client";

import ModalTrigger from "../modals/ModalTrigger";

export default function TestModal() {
  return (
    <div className="flex flex-col space-y-4">
      <ModalTrigger
        modalId="modal1"
        triggerText="Open Global Modal 1 from About"
      />
      <ModalTrigger
        modalId="modal2"
        triggerText="Open Global Modal 2 from About"
      />
    </div>
  );
}
