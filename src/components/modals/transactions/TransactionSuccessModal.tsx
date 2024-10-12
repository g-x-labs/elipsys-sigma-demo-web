import { transactionHashAtom } from "@/atoms/modalAtom";
import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";
import { useAtom } from "jotai";

export default function TransactionSuccessModal() {
  const [transactionHash] = useAtom(transactionHashAtom);

  return (
    <Modal
      modalId={ModalIds.TransactionSuccessModal}
      title="Transaction Success"
    >
      <div>Transaction completed successfully!</div>
      <div>Transaction Hash: {transactionHash}</div>
    </Modal>
  );
}
