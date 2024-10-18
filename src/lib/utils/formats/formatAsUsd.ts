import { abbreviateNumber } from "@/lib/utils/formats";

export function formatAsUsd(value: number | undefined | null): string {
  if (value === undefined || value === null) {
    return "--";
  }

  if (value < 0.01 && value > 0) {
    return "~<$0.01";
  }

  if (value >= 1e3) {
    return `~$${abbreviateNumber(value)}`;
  }

  // Fallback for normal numbers below 1000
  return `~${Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}`;
}
