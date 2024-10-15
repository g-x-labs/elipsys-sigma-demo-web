import { optimismSepoliaWhitelist } from "./optimismSepolia";
import { sepoliaWhitelist } from "./sepolia";
import { Address } from "viem";
import { blastSepoliaWhitelist } from "./blastSepolia";
import { NetworkId } from "@/enums";
import { NetworkInfo } from "@/types/network";
import { TokenInfo } from "@/types/token";

export const whitelistNetworks: Record<NetworkId, NetworkInfo> = {
  11155111: {
    id: NetworkId.Sepolia,
    name: "Sepolia",
    iconUrl: "assets/networks/ethereum.svg",
    tokens: sepoliaWhitelist,
  },
  11155420: {
    id: NetworkId.OptimismSepolia,
    name: "Optimism Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: optimismSepoliaWhitelist,
  },
  168587773: {
    id: NetworkId.BlastSepolia,
    name: "Blast Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: blastSepoliaWhitelist,
  },
};

export function getNetworkInfo(id: NetworkId | null): NetworkInfo | null {
  if (!id) return null;
  return whitelistNetworks[id];
}

export function getTokenInfo(
  id: NetworkId | null,
  address: Address | null,
): TokenInfo | null {
  if (!id || !address) return null;
  return whitelistNetworks[id].tokens[address];
}
