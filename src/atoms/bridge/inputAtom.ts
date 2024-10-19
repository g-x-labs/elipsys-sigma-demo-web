import { SelectionType } from "@/enums";
import useBridgeQuote from "@/lib/hooks/contract/useBridgeQuote";
import BigNumber from "bignumber.js";
import { atom } from "jotai";
import { bridgeNetworkAtom, bridgeTokenAtom } from "./tokenNetworkAtom";
import { bridgeAddressAtom } from "./bridgeSelectAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// Jotai atom to store the token input value globally
// REFACTOR: might consider implement the custom setter/getter function so that we can clean the input with `formatAmountInput` when setting
//  and return BigNumber when getting
export const tokenInputAtom = atom<string>("");

export const outputTokenAmountAtom = atom(async (get) => {
  const inputString = get(tokenInputAtom);
  const inputValue = !!inputString ? BigNumber(inputString ?? 0) : null;

  const tokenAddress = get(bridgeTokenAtom);
  const bridgeAddress = get(bridgeAddressAtom);
  const targetNetworkId = get(bridgeNetworkAtom)[SelectionType.FROM];

  const quote = useBridgeQuote({
    amount: inputValue,
    tokenAddress: tokenAddress,
    networkId: targetNetworkId,
    bridgeAddress: bridgeAddress,
  });
  return quote;
});
