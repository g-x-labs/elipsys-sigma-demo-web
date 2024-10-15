import { ZERO_ADDRESS } from "@/const/utills";
import { Address } from "viem";
import { useBalance, useReadContract } from "wagmi";
import { ierc20Abi } from "@/contract/abi";
import BigNumber from "bignumber.js";
import { NetworkId } from "@/enums";
/**
 * Description: Retrieves the balance of a specified ERC-20 token for a given address.
 *
 * @function
 * @param {Address} tokenAddress - The address for ERC-20 token
 * @param {Address} address - The wallet address to check the balance for
 * @param {chainId} networkId - The chain id to check the balance for
 * @returns {BigNumber | null} - The token balance
 */

export default function useGetUserTokenBalance({
  tokenAddress,
  address,
  chainId,
}: {
  tokenAddress: Address | null;
  address: Address | undefined;
  chainId: NetworkId | null;
}) {
  // INFO: fetch native eth token balance
  const balance = useBalance({
    address: address,
    chainId: chainId ?? undefined,
  });

  const result = useReadContract({
    abi: ierc20Abi,
    chainId: chainId ?? undefined,
    address: tokenAddress ?? undefined,
    functionName: "balanceOf",
    args: [address!],
    query: {
      enabled: !!tokenAddress && !!address,
    },
  });

  if (tokenAddress === ZERO_ADDRESS) {
    return balance.data !== undefined
      ? BigNumber(balance.data?.value.toString())
      : null;
  } else {
    return result.data !== undefined ? BigNumber(result.data.toString()) : null;
  }
}
