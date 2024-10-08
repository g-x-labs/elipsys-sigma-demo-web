import { ChainId, ChainInfo, TokenInfo } from "@/types/utils";
import { optimismSepolia } from "./optimismSepolia";
import { sepolia } from "./sepolia";
import { Address } from "viem";

export function getChainInfo(chainId: ChainId): ChainInfo {
  switch (chainId) {
    case ChainId.Sepolia:
      return {
        chainId: ChainId.Sepolia,
        chainName: "Sepolia",
        iconUrl: "/wallet/rabby.svg",
        tokenInfos: sepolia,
      };
    case ChainId.OptimismSepolia:
    default:
      return {
        chainId: ChainId.OptimismSepolia,
        chainName: "Optimism Sepolia",
        iconUrl: "/wallet/metamask.svg",
        tokenInfos: optimismSepolia,
      };
  }
}

export function getTokenInfo(
  chainId: ChainId,
  address: Address,
): TokenInfo | undefined {
  const tokenConfig = getChainInfo(chainId);
  return tokenConfig.tokenInfos[address];
}
