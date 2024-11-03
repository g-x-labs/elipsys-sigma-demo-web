import BigNumber from "bignumber.js";
import { atom } from "jotai";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// Jotai atom to store the token input value globally
// REFACTOR: might consider implement the custom setter/getter function so that we can clean the input with `formatAmountInput` when setting
//  and return BigNumber when getting
export const tokenInputAtom = atom<string>("");
export const tokenPriceAtom = atom<number>(0.01); // INFO: hardcoded value just for demo

export const outputTokenAmountAtom = atom((get) => {
  const inputString = get(tokenInputAtom);
  return inputString ? new BigNumber(inputString) : null;
});

export const usdValueAtom = atom((get) => {
  const quoteValue = get(outputTokenAmountAtom);
  const tokenPrice = get(tokenPriceAtom);

  return quoteValue ? quoteValue.times(tokenPrice).toNumber() : 0;
});
