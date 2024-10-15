import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export type TokenInfo = {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  underlyingDecimals: BigNumber;
  iconUrl?: string;
};
