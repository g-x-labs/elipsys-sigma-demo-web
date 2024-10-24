import { useAtom, useAtomValue } from "jotai";
import { ModalIds, NetworkId, TransactionStatus } from "@/enums";
import {
  modalAtom,
  // transactionHashAtom,
  transactionStatusAtom,
} from "@/atoms/modal/modalAtom";
import useSendCCToken from "../contract/useSendCCToken";
import BigNumber from "bignumber.js";
import { useEffect, useRef } from "react";
import { useWaitForTransactionReceipt } from "wagmi";
import { wormholeNetworkMap } from "@/enums/networks";
import { bridgeAddressAtom } from "@/atoms/bridge/bridgeSelectAtom";
import { relayTransaction } from "@/lib/relayer/relay";
import { Hash } from "viem";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export function useBridgeTransactionHandler() {
  const tokenAmount = useAtomValue(tokenInputAtom);
  const [, setTransactionStatus] = useAtom(transactionStatusAtom);
  // const [, setTransactionHash] = useAtom(transactionHashAtom);
  const [, setModal] = useAtom(modalAtom);
  const bridgeIndex = useAtomValue(bridgeAddressAtom);
  const relayerHash = useRef<Hash | undefined>();

  const { writeAsync, hash, isPending } = useSendCCToken({
    networkId: NetworkId.Sepolia,
    targetChain: wormholeNetworkMap[NetworkId.BnbSepolia],
    bridgeIndex: bridgeIndex,
    amount: BigNumber(tokenAmount),
  });

  const { isSuccess, isError } = useWaitForTransactionReceipt({ hash });

  const { isSuccess: isRelayerSuccess, isError: isRelayerError } =
    useWaitForTransactionReceipt({
      hash: relayerHash.current,
    });

  useEffect(() => {
    const handleTransaction = async () => {
      console.log("Transaction Hash: ", hash);
      console.log("Transaction Success: ", isSuccess);
      if (isSuccess && hash) {
        relayerHash.current = await relayTransaction(hash);
        console.log("Relayer Hash: ", relayerHash.current);
        // setTransactionStatus(TransactionStatus.Success);
        // setModal(ModalIds.TransactionSuccessModal);
      }

      if (isError) {
        setTransactionStatus(TransactionStatus.Fail);
        setModal(ModalIds.TransactionFailModal);
      }
    };

    handleTransaction();
  }, [isSuccess, isError, hash, setTransactionStatus, setModal]);

  useEffect(() => {
    if (isRelayerSuccess && relayerHash.current) {
      setTransactionStatus(TransactionStatus.Success);
      setModal(ModalIds.TransactionSuccessModal);
    } else if (isRelayerError) {
      setTransactionStatus(TransactionStatus.Fail);
      setModal(ModalIds.TransactionFailModal);
    }
  });

  const startBridgeTransaction = async () => {
    // Open the pending modal first
    await writeAsync();
    setModal(ModalIds.TransactionPendingModal);
  };

  return { startBridgeTransaction, isPending, isSuccess };
}
