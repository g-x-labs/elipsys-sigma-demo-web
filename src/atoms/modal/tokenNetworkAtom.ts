import { NetworkId, InputType } from "@/enums";
import { atom } from "jotai";
import { Address } from "viem";

// TODO: Refactor this
export const inputSideAtom = atom<InputType>(InputType.FROM);

export const inputTokenAtom = atom<Address | null>(null);
export const outputTokenAtom = atom<Address | null>(null);

export const inputNetworkAtom = atom<NetworkId>(NetworkId.Sepolia);
export const outputNetworkAtom = atom<NetworkId>(NetworkId.Sepolia);
