import { NetworkId } from "@/types/utils";
import { atom } from "jotai";
import { Address } from "viem";

// Atoms for managing selected network and tokenZ

export const selectedNetworkAtom = atom<NetworkId>(NetworkId.Sepolia);
export const selectedTokenAtom = atom<Address | null>(null);
