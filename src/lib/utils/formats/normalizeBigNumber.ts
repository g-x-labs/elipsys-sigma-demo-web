import BigNumber from "bignumber.js";

export const normalizeBigNumber = (value: BigNumber): string => {
  return value.div(BigNumber(10).pow(18)).toString();
};
