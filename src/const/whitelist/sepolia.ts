import { TokenInfo } from "@/types/utils";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const sepolia: Record<Address, TokenInfo> = {
  // TODO: Replace with mock token
  "0x1234567890abcdef1234567890abcdef12345678": {
    tokenAddress: "0x1234567890abcdef1234567890abcdef12345678",
    tokenName: "Mock Token",
    tokenSymbol: "MOCK",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/mock-token.svg",
  },
  // TODO: Replace with fake token
  "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd": {
    tokenAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    tokenName: "Fake Token",
    tokenSymbol: "FAKE",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/fake-token.svg",
  },
  "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65": {
    tokenAddress: "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65",
    tokenName: "Tether USD",
    tokenSymbol: "USDT",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdt.svg",
  },
  "0xd98B590ebE0a3eD8C144170bA4122D402182976f": {
    tokenAddress: "0xd98B590ebE0a3eD8C144170bA4122D402182976f",
    tokenName: "USD Coin",
    tokenSymbol: "USDC",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdc.svg",
  },
};
