import { TokenConfig } from "@/types/utils";
import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const sepolia: TokenConfig = {
  "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65": {
    tokenAddress: "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65",
    tokenName: "Tether USD",
    tokenSymbol: "USDT",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "/wallet/rabby.svg",
  },
};
