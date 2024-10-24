import { useAtom, useAtomValue } from "jotai";
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
import { wormholeNetworkMap } from "@/enums/networks";
import { bridgeAddressAtom } from "@/atoms/bridge/bridgeSelectAtom";

export function useBridgeTransactionHandler() {
  const [, setTransactionStatus] = useAtom(transactionStatusAtom);
  // const [, setTransactionHash] = useAtom(transactionHashAtom);
  const [, setModal] = useAtom(modalAtom);
  const bridgeIndex = useAtomValue(bridgeAddressAtom);

  //TODO: replace with real data
  const { writeAsync, hash, isPending } = useSendCCToken({
    networkId: NetworkId.Sepolia,
    targetChain: wormholeNetworkMap[NetworkId.Sepolia], //It's wormhole networkId, 4 is BSC / 2 is Sepolia
    bridgeIndex: bridgeIndex,
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
