import { TokenInfo } from "@/types/token";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const sepoliaWhitelist: Record<Address, TokenInfo> = {
  // TODO: Replace with mock token
  "0x1234567890abcdef1234567890abcdef12345678": {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    name: "Mock Token",
    symbol: "MOCK",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/mock-token.svg",
  },
  // TODO: Replace with fake token
  "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd": {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    name: "Fake Token",
    symbol: "FAKE",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/fake-token.svg",
  },
  "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65": {
    address: "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65",
    name: "Tether USD",
    symbol: "USDT",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdt.svg",
  },
  "0xd98B590ebE0a3eD8C144170bA4122D402182976f": {
    address: "0xd98B590ebE0a3eD8C144170bA4122D402182976f",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdc.svg",
  },
};
