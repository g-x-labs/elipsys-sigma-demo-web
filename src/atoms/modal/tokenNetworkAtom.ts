import { NetworkId, InputType } from "@/enums";
import { atom } from "jotai";
import { Address } from "viem";

// TODO: Refactor this
export const inputSideAtom = atom<InputType>(InputType.FROM);

export const tokenFromAtom = atom<Address | null>(null);
export const networkFromAtom = atom<NetworkId>(NetworkId.Sepolia);

export const tokenToAtom = atom<Address | null>(null);
export const networkToAtom = atom<NetworkId>(NetworkId.Sepolia);

// New Atoms
export const inputTokenAtom = atom<Address | null>(null);
export const outputTokenAtom = atom<Address | null>(null);

export const inputNetworkAtom = atom<number | null>(null);
export const outputNetworkAtom = atom<number | null>(null);
