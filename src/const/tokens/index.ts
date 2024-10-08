import { ChainId, TokenConfig, TokenInfo } from "@/types/utils";
import { optimismSepolia } from "./optimismSepolia";
import { sepolia } from "./sepolia";
import { Address } from "viem";

export function getTokenConfiguration(chainId: ChainId): TokenConfig {
  switch (chainId) {
    case ChainId.Sepolia:
      return sepolia;
    case ChainId.OptimismSepolia:
    default:
      return optimismSepolia;
  }
}

export function getTokenInfo(
  chainId: ChainId,
  address: Address,
): TokenInfo | undefined {
  const tokenConfig = getTokenConfiguration(chainId);
  return tokenConfig[address];
}
