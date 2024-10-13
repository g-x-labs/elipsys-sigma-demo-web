import { TokenInfo } from "@/types/utils";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const blastSepolia: Record<Address, TokenInfo> = {
  "0x1511C758046dA4c0850953D159f926d10996adf5": {
    tokenAddress: "0x86c657a3a2b9090f6273a657a46ac03bc37263aa",
    tokenName: "Tether USD",
    tokenSymbol: "USDT",
    tokenDecimals: 18,
    underlyingTokenDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdt.svg",
  },
};
