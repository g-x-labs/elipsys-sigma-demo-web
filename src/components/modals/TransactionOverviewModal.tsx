import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";

export default function TransactionOverviewModal() {
  return (
    <Modal
      modalId={ModalIds.TransactionOverviewModal}
      title="Transaction Overview"
    >
      <div>Transaction Overview</div>
    </Modal>
  );
}
