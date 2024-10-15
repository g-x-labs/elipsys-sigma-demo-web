// TODO: Not sure if this function needs to handle string as well or not
export function formatAsUsd(value: number | undefined | null): string {
  if (value === undefined || value === null) {
    return "--";
  }

  if (value < 0.01 && value > 0) {
    return "~<$0.01";
  }

  return `~${Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}`;
}
