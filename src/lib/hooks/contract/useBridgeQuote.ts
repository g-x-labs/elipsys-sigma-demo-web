import { NetworkId } from "@/enums";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

interface UseBridgeQuoteProps {
  tokenFromInfo: Address;
  tokenToInfo: Address;
  amount: BigNumber | null;
  networkId: NetworkId;
}

export default function useBridgeQuote(
  props: UseBridgeQuoteProps,
): BigNumber | null {
  const { tokenFromInfo, tokenToInfo, amount, networkId } = props;

  if (!tokenFromInfo || !tokenToInfo || !amount || !networkId) return null;

  // TODO: Call contract here to fetch quote
  // const result = useSimulateContract()

  const result = BigNumber(5);

  return result.times(amount);
}
