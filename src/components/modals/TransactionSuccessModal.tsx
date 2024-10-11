import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";

export default function TransactionSuccessModal() {
  return (
    <Modal
      modalId={ModalIds.TransactionSuccessModal}
      title="Transaction Success"
    >
      <div>Transaction Success</div>
    </Modal>
  );
}
