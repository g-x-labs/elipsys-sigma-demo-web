import { crossChainTokenAbi } from "@/contract/abi";
import { NetworkId } from "@/enums";
import BigNumber from "bignumber.js";
import { useWriteContract } from "wagmi";
import { useCallback } from "react";

export default function useSendCCToken({
  networkId,
  targetChain,
  bridgeIndex,
  amount,
}: {
  networkId: NetworkId;
  targetChain: NetworkId;
  bridgeIndex: string;
  amount: BigNumber;
}) {
  const { writeContractAsync, data: hash, isPending } = useWriteContract();

  const writeAsync = useCallback(async () => {
    return writeContractAsync({
      chainId: networkId,
      address: "0x1", // TODO: add contract address
      abi: crossChainTokenAbi,
      functionName: "sendTokens",
      args: [targetChain, bridgeIndex, amount, 300000], // TODO: fix gas limit
    });
  }, [amount, bridgeIndex, networkId, targetChain, writeContractAsync]);

  return {
    writeAsync,
    hash,
    isPending,
  };
}
