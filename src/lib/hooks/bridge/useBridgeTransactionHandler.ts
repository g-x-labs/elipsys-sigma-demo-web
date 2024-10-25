import { useAtom, useAtomValue } from "jotai";
import { ModalIds, TransactionStatus } from "@/enums";
import {
  modalAtom,
  transactionHashAtom,
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
import { bridgeNetworkAtom } from "@/atoms/bridge/tokenNetworkAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export function useBridgeTransactionHandler() {
  const tokenAmount = useAtomValue(tokenInputAtom);
  const [, setTransactionStatus] = useAtom(transactionStatusAtom);
  const [, setTransactionHash] = useAtom(transactionHashAtom);
  const [, setModal] = useAtom(modalAtom);
  const { FROM: fromNetwork, TO: toNetwork } = useAtomValue(bridgeNetworkAtom);
  const bridgeIndex = useAtomValue(bridgeAddressAtom);
  const relayerHash = useRef<Hash | undefined>();

  const { writeAsync, hash, isPending } = useSendCCToken({
    networkId: fromNetwork,
    targetChain: wormholeNetworkMap[toNetwork],
    bridgeIndex: bridgeIndex,
    amount: BigNumber(tokenAmount),
  });

  const { isSuccess, isError } = useWaitForTransactionReceipt({ hash });

  // const { isSuccess: isRelayerSuccess, isError: isRelayerError } =
  //   useWaitForTransactionReceipt({
  //     hash: relayerHash.current,
  //     chainId: toNetwork,
  //     // Need to send chainId
  //   });

  const handleTransaction = useCallback(async () => {
    console.log("handleTransaction");
    if (isPending) {
      console.log("isPending", isPending);
      setTransactionStatus(TransactionStatus.Pending);
      setModal(ModalIds.TransactionPendingModal);
    }

    if (isSuccess && hash) {
      console.log("isSuccess", isSuccess);
      console.log("hash", hash);
      setTransactionStatus(TransactionStatus.SentCCTToken);
      relayerHash.current = await relayTransaction(hash);
      if (relayerHash.current) {
        console.log("relayerHash", relayerHash.current);
        setTransactionStatus(TransactionStatus.Success);
        setTransactionHash(relayerHash.current);
        setModal(ModalIds.TransactionSuccessModal);
      }
    }

    if (isError) {
      setTransactionStatus(TransactionStatus.Fail);
      setModal(ModalIds.TransactionFailModal);
    }
  }, [
    isPending,
    isSuccess,
    isError,
    hash,
    setTransactionStatus,
    setTransactionHash,
    setModal,
  ]);

  useEffect(() => {
    handleTransaction();
  }, [handleTransaction]);

  const startBridgeTransaction = useCallback(async () => {
    await writeAsync();
  }, [writeAsync]);

  return { startBridgeTransaction, isPending };
}
