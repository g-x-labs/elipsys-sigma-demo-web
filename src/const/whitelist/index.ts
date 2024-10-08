import { ChainId, ChainInfo, TokenInfo } from "@/types/utils";
import { optimismSepolia } from "./optimismSepolia";
import { sepolia } from "./sepolia";
import { Address } from "viem";

export const whitelistChains: Record<ChainId, ChainInfo> = {
  11155111: {
    chainId: ChainId.Sepolia,
    chainName: "Sepolia",
    iconUrl: "/wallet/rabby.svg",
    tokens: sepolia,
  },
  11155420: {
    chainId: ChainId.OptimismSepolia,
    chainName: "Optimism Sepolia",
    iconUrl: "/wallet/metamask.svg",
    tokens: optimismSepolia,
  },
};

export function getTokenInfo(
  chainId: ChainId,
  address: Address,
): TokenInfo | undefined {
  const chainInfo = whitelistChains[chainId];
  return chainInfo.tokens[address];
}
