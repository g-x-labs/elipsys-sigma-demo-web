import BigNumber from "bignumber.js";
import { abbreviateNumber, normalizeBigNumber } from "@/lib/utils/formats";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export function formatTokenAmount(value: BigNumber | undefined | null): string {
  if (value === undefined || value === null) {
    return "--";
  }

  const precision = 8;

  const formattedValue = Number(normalizeBigNumber(value));

  if (formattedValue >= 1e3) {
    return abbreviateNumber(formattedValue, 2);
  }

  return formattedValue.toFixed(precision).replace(/\.?0+$/, "");
}
