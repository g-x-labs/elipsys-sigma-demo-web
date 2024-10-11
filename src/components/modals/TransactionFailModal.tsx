import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";

export default function TransactionFailModal() {
  return (
    <Modal modalId={ModalIds.TransactionFailModal} title="Transaction Fail">
      <div>Transaction Fail</div>
    </Modal>
  );
}
