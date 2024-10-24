import { TokenInfo } from "@/types";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export const bnbSepoliaWhitelist: Record<Address, TokenInfo> = {
  "0x2124d7c0c242225c95197d54bf280ac0f5cea65d": {
    address: "0x2124d7c0c242225c95197d54bf280ac0f5cea65d",
    name: "CC Token",
    symbol: "CCT",
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
