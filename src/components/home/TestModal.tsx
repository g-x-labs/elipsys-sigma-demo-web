"use client";

import ModalTrigger from "../modals/ModalTrigger";

export default function TestModal() {
  return (
    <div className="flex flex-col space-y-4">
      <ModalTrigger
        modalId="tokenNetworkModal"
        triggerText="tokenNetworkModal"
      />
    </div>
  );
}
