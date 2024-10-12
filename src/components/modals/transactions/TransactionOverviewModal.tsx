import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";
import { Button } from "@/components/ui/Button";
import { useBridgeTransactionHandler } from "@/lib/hooks/useBridgeTransactionHandler";

export default function TransactionOverviewModal() {
  const { startBridgeTransaction } = useBridgeTransactionHandler();

  return (
    <Modal
      modalId={ModalIds.TransactionOverviewModal}
      title="Transaction Overview"
    >
      <div>Transaction Overview</div>
      <Button onClick={startBridgeTransaction}>Start Transaction</Button>
    </Modal>
  );
}
