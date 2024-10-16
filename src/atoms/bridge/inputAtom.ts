import { atom } from "jotai";

// Jotai atom to store the token input value globally
// REFACTOR: might consider implement the custom setter/getter function so that we can clean the input with `tokenAmountInputFilter` when setting
//  and return BigNumber when getting
export const tokenInputAtom = atom<string>("");
