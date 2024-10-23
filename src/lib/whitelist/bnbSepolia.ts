import { TokenInfo } from "@/types";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export const bnbSepoliaWhitelist: Record<Address, TokenInfo> = {
  // TODO: Replace with mock token
  "0x1234567890abcdef1234567890abcdef12345678": {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "Mock Token",
    symbol: "MOCK",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/mock-token.svg",
  },
  "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd": {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    name: "Fake Token",
    symbol: "FAKE",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/fake-token.svg",
  },
};
