import { useAtom } from "jotai";
import { ModalIds } from "@/enums/modals";
import {
  modalAtom,
  transactionHashAtom,
  transactionStatusAtom,
} from "@/atoms/modal/modalAtom";
import { TransactionStatus } from "@/enums/transactionStatus";

export function useBridgeTransactionHandler() {
  const [, setTransactionStatus] = useAtom(transactionStatusAtom);
  const [, setTransactionHash] = useAtom(transactionHashAtom);
  const [, setModal] = useAtom(modalAtom);

  const startBridgeTransaction = () => {
    // Open the pending modal first
    setModal(ModalIds.TransactionPendingModal);

    // Fake a transaction with a delay
    setTimeout(() => {
      // Faking a transaction hash
      const fakeHash = "0x1234567890abcdef"; // Placeholder hash
      setTransactionHash(fakeHash);

      // Randomly set transaction success or failure
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        setTransactionStatus(TransactionStatus.Success);
        setModal(ModalIds.TransactionSuccessModal);
      } else {
        setTransactionStatus(TransactionStatus.Fail);
        setModal(ModalIds.TransactionFailModal);
      }
    }, 3000); // Fake 3 seconds for pending transaction
  };

  return { startBridgeTransaction };
}
