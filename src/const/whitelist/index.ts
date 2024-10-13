import { NetworkId, NetworkInfo, TokenInfo } from "@/types/utils";
import { optimismSepolia } from "./optimismSepolia";
import { sepolia } from "./sepolia";
import { Address } from "viem";

export const whitelistNetworks: Record<NetworkId, NetworkInfo> = {
  11155111: {
    id: NetworkId.Sepolia,
    name: "Sepolia",
    iconUrl: "assets/networks/ethereum.svg",
    tokens: sepolia,
  },
  11155420: {
    id: NetworkId.OptimismSepolia,
    name: "Optimism Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: optimismSepolia,
  },
  168587773: {
    id: NetworkId.BlastSepolia,
    name: "Blast Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: {},
  },
};

export function getTokenInfo(
  id: NetworkId,
  address: Address,
): TokenInfo | undefined {
  const chainInfo = whitelistNetworks[id];
  return chainInfo.tokens[address];
}
