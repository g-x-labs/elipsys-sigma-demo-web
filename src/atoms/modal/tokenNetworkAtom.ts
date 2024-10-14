import { InputType } from "@/enums/inputs";
import { NetworkId } from "@/enums/networks";
import { atom } from "jotai";
import { Address } from "viem";

// TODO: Refactor this
export const inputSideAtom = atom<InputType>(InputType.FROM);

export const tokenFromAtom = atom<Address | null>(null);
export const networkFromAtom = atom<NetworkId>(NetworkId.Sepolia);

export const tokenToAtom = atom<Address | null>(null);
export const networkToAtom = atom<NetworkId>(NetworkId.Sepolia);
