import { TokenInfo } from "@/types/utils";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const optimismSepolia: Record<Address, TokenInfo> = {
  "0x1511C758046dA4c0850953D159f926d10996adf5": {
    tokenAddress: "0xb86b6cdb2e280a8fec210d02c598c843e9a5b16c",
    tokenName: "Tether USD",
    tokenSymbol: "USDT",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "/wallet/metamask.svg",
  },
};
