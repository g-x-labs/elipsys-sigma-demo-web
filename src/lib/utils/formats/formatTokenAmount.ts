import BigNumber from "bignumber.js";
import { abbreviateNumber } from "@/lib/utils/formats";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export function formatTokenAmount(value: BigNumber | undefined | null): string {
  if (value === undefined || value === null) {
    return "--";
  }

  const decimals = 18;
  const precision = 8;
  const divisor = BigNumber(10).pow(decimals);

  const formattedValue = Number(value.div(divisor));

  if (formattedValue >= 1e3) {
    return abbreviateNumber(formattedValue, 2);
  }

  return formattedValue.toFixed(precision).replace(/\.?0+$/, "");
}
