import { TokenConfig } from "@/types/token";
import BigNumber from "bignumber.js";

// TODO: replace with actual token info
export const optimismSepolia: TokenConfig = {
  "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65": {
    tokenAddress: "0xe90a57A45F1Eae578F5aec8eed5bA8Fc6F55eF65",
    tokenName: "Tether USD",
    tokenSymbol: "USDT",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "/wallet/rabby.svg",
  },
};
