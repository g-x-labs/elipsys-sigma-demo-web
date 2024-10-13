import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export enum NetworkId {
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

export type NetworkInfo = {
  networkId: NetworkId;
  networkName: string;
  iconUrl?: string;
  tokens: Record<Address, TokenInfo>;
};
