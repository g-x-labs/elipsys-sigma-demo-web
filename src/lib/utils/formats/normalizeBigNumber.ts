import BigNumber from "bignumber.js";

export const normalizeBigNumber = (value: BigNumber): BigNumber => {
  return value.div(BigNumber(10).pow(18));
};
