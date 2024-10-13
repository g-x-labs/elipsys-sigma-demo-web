import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export enum NetworkId {
  Sepolia = 11155111,
  OptimismSepolia = 11155420,
}

export type TokenInfo = {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  underlyingTokenDecimals: BigNumber;
  iconUrl?: string;
};

export type NetworkInfo = {
  id: NetworkId;
  name: string;
  iconUrl?: string;
  tokens: Record<Address, TokenInfo>;
};
