import { crossChainTokenAbi } from "@/contract/abi";
import { NetworkId } from "@/enums";
import BigNumber from "bignumber.js";
import { useWriteContract } from "wagmi";
import { useCallback } from "react";
import { CCTOKEN_ADDRESS } from "@/lib/constants/addresses";

export default function useSendCCToken({
  networkId,
  targetChain,
  bridgeIndex,
  amount,
}: {
  networkId: NetworkId;
  targetChain: 2 | 4;
  bridgeIndex: 0 | 1;
  amount: BigNumber;
}) {
  const { writeContractAsync, data: hash, isPending } = useWriteContract();

  const writeAsync = useCallback(async () => {
    return writeContractAsync({
      chainId: networkId,
      address: CCTOKEN_ADDRESS,
      abi: crossChainTokenAbi,
      functionName: "sendTokens",
      args: [targetChain, bridgeIndex, amount, 100000],
      value: BigInt(100000), // hardcoded for now
    });
  }, [amount, bridgeIndex, networkId, targetChain, writeContractAsync]);

  return {
    writeAsync,
    hash,
    isPending,
  };
}
