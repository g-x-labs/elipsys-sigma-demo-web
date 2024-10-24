import { useAtom } from "jotai";
import { ModalIds, NetworkId, TransactionStatus } from "@/enums";
import {
  modalAtom,
  // transactionHashAtom,
  transactionStatusAtom,
} from "@/atoms/modal/modalAtom";
import useSendCCToken from "../contract/useSendCCToken";
import BigNumber from "bignumber.js";
import { useEffect } from "react";
import { useWaitForTransactionReceipt } from "wagmi";

export function useBridgeTransactionHandler() {
  const [, setTransactionStatus] = useAtom(transactionStatusAtom);
  // const [, setTransactionHash] = useAtom(transactionHashAtom);
  const [, setModal] = useAtom(modalAtom);

  //TODO: replace with real data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { writeAsync, hash, isPending } = useSendCCToken({
    networkId: NetworkId.Sepolia,
    targetChain: 4, //It's wormhole networkId, 4 is BSC / 2 is Sepolia
    bridgeIndex: 0,
    amount: BigNumber(20000000000000000),
  });

  const { isSuccess, isError } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isSuccess) {
      setTransactionStatus(TransactionStatus.Success);
      setModal(ModalIds.TransactionSuccessModal);
    } else {
      setTransactionStatus(TransactionStatus.Fail);
      setModal(ModalIds.TransactionFailModal);
    }
  }, [isSuccess, isError, setTransactionStatus, setModal]);

  const startBridgeTransaction = async () => {
    // Open the pending modal first
    await writeAsync();
    setModal(ModalIds.TransactionPendingModal);
  };

  return { startBridgeTransaction, isPending };
}
