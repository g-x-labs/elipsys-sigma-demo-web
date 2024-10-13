import { NetworkId, NetworkInfo, TokenInfo } from "@/types/utils";
import { optimismSepolia } from "./optimismSepolia";
import { sepolia } from "./sepolia";
import { Address } from "viem";

export const whitelistNetworks: Record<NetworkId, NetworkInfo> = {
  11155111: {
    networkId: NetworkId.Sepolia,
    networkName: "Sepolia",
    iconUrl: "assets/networks/ethereum.svg",
    tokens: sepolia,
  },
  11155420: {
    networkId: NetworkId.OptimismSepolia,
    networkName: "Optimism Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: optimismSepolia,
  },
};

export function getTokenInfo(
  networkId: NetworkId,
  address: Address,
): TokenInfo | undefined {
  const chainInfo = whitelistNetworks[networkId];
  return chainInfo.tokens[address];
}
