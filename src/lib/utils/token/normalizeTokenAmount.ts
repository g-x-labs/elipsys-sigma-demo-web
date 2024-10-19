import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export const normalizeTokenAmount = (
  value: BigNumber,
  underlyingDecimals: BigNumber | undefined,
): BigNumber | undefined => {
  if (!underlyingDecimals) return undefined;
  return value.div(underlyingDecimals);
};
