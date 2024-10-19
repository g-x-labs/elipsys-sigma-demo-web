import { NetworkId } from "@/enums";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

interface UseBridgeQuoteProps {
  tokenAddress: Address | null;
  networkId: NetworkId;
  bridgeAddress: Address | null;
  amount: BigNumber | null;
}

export default function useBridgeQuote(
  props: UseBridgeQuoteProps,
): BigNumber | null {
  const { bridgeAddress, tokenAddress, amount, networkId } = props;

  if (!bridgeAddress || !tokenAddress || !amount || !networkId) return null;

  // TODO: Call contract here to fetch quote
  // const result = useSimulateContract()

  const result = BigNumber(5);

  return result.times(amount);
}
