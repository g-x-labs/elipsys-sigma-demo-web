import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";

export default function TransactionPendingModal() {
  return (
    <Modal
      modalId={ModalIds.TransactionPendingModal}
      title="Transaction Pending"
    >
      <div>Transaction Pending</div>
    </Modal>
  );
}
