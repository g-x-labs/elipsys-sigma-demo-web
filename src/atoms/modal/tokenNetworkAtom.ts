import { NetworkId } from "@/types/utils";
import { atom } from "jotai";
import { Address } from "viem";

// Atoms for managing selected network and tokens
export enum InputType {
  FROM = "FROM",
  TO = "TO",
}
export const inputSideAtom = atom<InputType>(InputType.FROM);

export const tokenFromAtom = atom<Address | null>(null);
export const networkFromAtom = atom<NetworkId>(NetworkId.Sepolia);

export const tokenToAtom = atom<Address | null>(null);
export const networkToAtom = atom<NetworkId>(NetworkId.Sepolia);
