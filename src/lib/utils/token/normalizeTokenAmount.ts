import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export const normalizeTokenAmount = (
  value: BigNumber,
  tokenDecimals: number | undefined,
): BigNumber | undefined => {
  if (!tokenDecimals) return undefined;
  return value.div(BigNumber(10).pow(tokenDecimals));
};
