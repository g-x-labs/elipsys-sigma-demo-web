import { NetworkId } from "@/enums";
import useBridgeQuote from "@/lib/hooks/contract/useBridgeQuote";
import BigNumber from "bignumber.js";
import { atom } from "jotai";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// Jotai atom to store the token input value globally
// REFACTOR: might consider implement the custom setter/getter function so that we can clean the input with `tokenAmountInputFilter` when setting
//  and return BigNumber when getting
export const tokenInputAtom = atom<string>("");

export const outputTokenAmountAtom = atom(async (get) => {
  const inputString = get(tokenInputAtom);
  const inputValue = inputString !== "" ? BigNumber(inputString) : null;

  // TODO: replace with real value
  const quote = useBridgeQuote({
    amount: inputValue,
    networkId: NetworkId.BlastSepolia,
    tokenFromInfo: "0x",
    tokenToInfo: "0x",
  });
  return quote;
});
