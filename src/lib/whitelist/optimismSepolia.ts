import { TokenInfo } from "@/types";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const optimismSepoliaWhitelist: Record<Address, TokenInfo> = {
  "0x1234567890abcdef1234567890abcdef12345678": {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "Mock Token",
    symbol: "MOCK",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/mock-token.svg",
  },
  "0x944B5C530f7112D8533BB87E3dCAb99D881B3C73": {
    address: "0x944B5C530f7112D8533BB87E3dCAb99D881B3C73",
    name: "Tether USD",
    symbol: "USDT",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdt.svg",
  },
};
