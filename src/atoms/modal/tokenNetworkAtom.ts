import { NetworkId, SelectionType } from "@/enums";
import { atom } from "jotai";
import { Address } from "viem";

export const selectionTypeAtom = atom<SelectionType>(SelectionType.FROM);

export const fromTokenAtom = atom<Address | null>(null);
export const toTokenAtom = atom<Address | null>(null);

export const fromNetworkAtom = atom<NetworkId>(NetworkId.Sepolia);
export const toNetworkAtom = atom<NetworkId>(NetworkId.OptimismSepolia);
