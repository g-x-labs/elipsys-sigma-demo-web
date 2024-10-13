import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export enum ChainId {
  Sepolia = 11155111,
  OptimismSepolia = 11155420,
  BlastSepolia = 168587773,
}

export type TokenInfo = {
  tokenAddress: Address;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  underlyingTokenDecimals: BigNumber;
  iconUrl?: string;
};

export type ChainInfo = {
  chainId: ChainId;
  chainName: string;
  iconUrl?: string;
  tokens: Record<Address, TokenInfo>;
};
