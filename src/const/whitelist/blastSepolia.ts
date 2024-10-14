import { TokenInfo } from "@/types/token";
import BigNumber from "bignumber.js";
import { Address } from "viem";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: replace with actual token info
export const blastSepoliaWhitelist: Record<Address, TokenInfo> = {
  "0x86c657a3a2b9090f6273a657a46ac03bc37263aa": {
    address: "0x86c657a3a2b9090f6273a657a46ac03bc37263aa",
    name: "Tether USD",
    symbol: "USDT",
    decimals: 18,
    underlyingDecimals: BigNumber(1e18),
    iconUrl: "assets/tokens/usdt.svg",
  },
};
