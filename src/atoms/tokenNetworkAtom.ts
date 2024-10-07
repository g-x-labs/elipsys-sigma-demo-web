import { atom } from "jotai";

// Atoms for managing selected network and token
export const selectedNetworkAtom = atom<string | null>("arb");
export const selectedTokenAtom = atom<string | null>("Arbitrum Token A");
