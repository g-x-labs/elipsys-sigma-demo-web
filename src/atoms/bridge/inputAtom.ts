import BigNumber from "bignumber.js";
import { atom } from "jotai";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// Jotai atom to store the token input value globally
// REFACTOR: might consider implement the custom setter/getter function so that we can clean the input with `formatAmountInput` when setting
//  and return BigNumber when getting
export const tokenInputAtom = atom<string>("");

// REFACTOR: can remove this since output token is 1:1 to input
export const outputTokenAmountAtom = atom(async (get) => {
  const inputString = get(tokenInputAtom);
  const inputValue = !!inputString ? BigNumber(inputString ?? 0) : null;

  // INFO: output token amount is 1:1 with input token amount
  return inputValue;
});

export const tokenPriceAtom = atom<number>(0.01); // INFO: hardcoded value just for demo
export const usdValueAtom = atom(async (get) => {
  const quoteValue = await get(outputTokenAmountAtom);
  const tokenPrice = get(tokenPriceAtom);

  return quoteValue ? quoteValue.times(tokenPrice).toNumber() : 0;
});
