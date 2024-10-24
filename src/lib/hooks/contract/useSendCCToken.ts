import { crossChainTokenAbi } from "@/contract/abi";
import { NetworkId } from "@/enums";
import BigNumber from "bignumber.js";
import { useWriteContract } from "wagmi";
import { useCallback } from "react";
import { CCTOKEN_ADDRESS } from "@/lib/constants/addresses";
import { WormholeNetworkId } from "@/enums/networks";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export default function useSendCCToken({
  networkId,
  targetChain,
  bridgeIndex,
  amount,
}: {
  networkId: NetworkId;
  targetChain: WormholeNetworkId;
  bridgeIndex: 0 | 1;
  amount: BigNumber;
}) {
  const { writeContractAsync, data: hash, isPending } = useWriteContract();

  // INFO: Const for now since only bridging CCToken
  const rawAmount = amount.times(BigNumber(1e18));

  const writeAsync = useCallback(async () => {
    return writeContractAsync({
      chainId: networkId,
      address: CCTOKEN_ADDRESS,
      abi: crossChainTokenAbi,
      functionName: "sendTokens",
      args: [targetChain, bridgeIndex, rawAmount, 100000],
      value: BigInt(100000), // hardcoded for now
    });
  }, [rawAmount, bridgeIndex, networkId, targetChain, writeContractAsync]);

  return {
    writeAsync,
    hash,
    isPending,
  };
}
