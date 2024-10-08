import { Address } from "viem";

export type TokenInfo = {
  tokenAddress: Address;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  underlyingTokenDecimals: BigNumber;
  iconUrl?: string;
};

export type TokenConfig = Record<Address, TokenInfo>;
