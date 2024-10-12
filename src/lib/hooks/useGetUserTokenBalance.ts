import { ZERO_ADDRESS } from "@/const/utills";
import { Address } from "viem";
import { useBalance, useReadContract } from "wagmi";
import { ierc20Abi } from "@/contract/abi";
import BigNumber from "bignumber.js";
/**
 * Description: Retrieves the balance of a specified ERC-20 token for a given address.
 *
 * @function
 * @param {Address} tokenAddress - The address for ERC-20 token
 * @param {Address} address - The wallet address to check the balance for
 * @returns {BigNumber | null} - The token balance
 */

export default function useGetUserTokenBalance({
  tokenAddress,
  address,
}: {
  tokenAddress: Address | undefined;
  address: Address | undefined;
}) {
  // INFO: fetch native eth token balance
  const balance = useBalance({
    address: tokenAddress,
  });

  const result = useReadContract({
    abi: ierc20Abi,
    address: tokenAddress,
    functionName: "balanceOf",
    args: [address!],
    query: {
      enabled: !!tokenAddress && !!address,
    },
  });

  if (tokenAddress === ZERO_ADDRESS) {
    return balance.data?.value
      ? BigNumber(balance.data?.value.toString())
      : null;
  } else {
    return result.data ? BigNumber(result.data.toString()) : null;
  }
}
