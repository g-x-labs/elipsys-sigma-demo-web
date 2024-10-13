import { NetworkId, NetworkInfo, TokenInfo } from "@/types/utils";
import { optimismSepoliaWhitelist } from "./optimismSepolia";
import { sepoliaWhitelist } from "./sepolia";
import { Address } from "viem";
import { blastSepoliaWhitelist } from "./blastSepolia";

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

export function getTokenInfo(
  id: NetworkId,
  address: Address,
): TokenInfo | undefined {
  const chainInfo = whitelistNetworks[id];
  return chainInfo.tokens[address];
}
