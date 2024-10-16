import { useModal } from "@/lib/hooks/modals/useModalAtom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./Dialog";

interface ModalProps {
  modalId: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  modalId,
  title,
  description,
  children,
}) => {
  const { isOpen, closeModal } = useModal(modalId);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="w-[456px]">
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
