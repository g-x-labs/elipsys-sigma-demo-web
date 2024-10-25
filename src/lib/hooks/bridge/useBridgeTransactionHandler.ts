import { useAtom, useAtomValue } from "jotai";
import { ModalIds, NetworkId, TransactionStatus } from "@/enums";
import {
  modalAtom,
  // transactionHashAtom,
  transactionStatusAtom,
} from "@/atoms/modal/modalAtom";
import useSendCCToken from "../contract/useSendCCToken";
import BigNumber from "bignumber.js";
import { useCallback, useEffect, useRef } from "react";
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
      // Need to send chainId
    });

  const handleTransaction = useCallback(async () => {
    console.log("handleTransaction");
    if (isPending) {
      console.log("isPending", isPending);
      setTransactionStatus(TransactionStatus.Pending);
      // setModal(ModalIds.TransactionPendingModal);
    }

    if (isSuccess && hash) {
      console.log("isSuccess", isSuccess);
      console.log("hash", hash);
      setTransactionStatus(TransactionStatus.SentCCTToken);
      relayerHash.current = await relayTransaction(hash);
      if (relayerHash.current) {
        setTransactionStatus(TransactionStatus.Success);
        setModal(ModalIds.TransactionSuccessModal);
      }
    }

    if (isError) {
      setTransactionStatus(TransactionStatus.Fail);
      setModal(ModalIds.TransactionFailModal);
    }
  }, [isPending, isSuccess, isError, hash, setTransactionStatus, setModal]);

  useEffect(() => {
    handleTransaction();
  }, [handleTransaction]);

  useEffect(() => {
    if (isRelayerSuccess && relayerHash.current) {
      setTransactionStatus(TransactionStatus.Success);
      setModal(ModalIds.TransactionSuccessModal);
    } else if (isRelayerError) {
      setTransactionStatus(TransactionStatus.Fail);
      setModal(ModalIds.TransactionFailModal);
    }
  }, [isRelayerSuccess, isRelayerError, setTransactionStatus, setModal]);

  const startBridgeTransaction = useCallback(async () => {
    await writeAsync();
    setModal(ModalIds.TransactionPendingModal);
  }, [writeAsync]);

  return { startBridgeTransaction, isPending };
}
