"use client";

// INFO: Might actually not need this, or hv to be able to pass button variants.
import { Button } from "@/components/ui/Button";
import { useModal } from "@/lib/hooks/useModalAtom";

interface ModalTriggerProps {
  modalId: string;
  triggerText: string;
}

const ModalTrigger: React.FC<ModalTriggerProps> = ({
  modalId,
  triggerText,
}) => {
  const { openModal } = useModal(modalId);

  return <Button onClick={openModal}>{triggerText}</Button>;
};

export default ModalTrigger;
