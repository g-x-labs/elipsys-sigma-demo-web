"use client";

import { Button } from "@/components/ui";
import { ModalIds } from "@/enums";
import { useModal } from "@/lib/hooks/modals/useModalAtom";

const BridgeButton: React.FC = () => {
  const { openModal } = useModal(ModalIds.TokenNetworkSelectorModal);

  return (
    <Button variant={"action"} onClick={openModal} className="w-full">
      Enter Amount
    </Button>
  );
};

export { BridgeButton };
