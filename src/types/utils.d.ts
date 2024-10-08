import { Address } from "viem";

export enum ChainId {
  Sepolia = 11155111,
  OptimismSepolia = 11155420,
}

export type TokenInfo = {
  tokenAddress: Address;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  underlyingTokenDecimals: BigNumber;
  iconUrl?: string;
};

export type TokenConfig = Record<Address, TokenInfo>;
