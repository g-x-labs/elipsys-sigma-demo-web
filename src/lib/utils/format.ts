export function formatAddress(
  address: string,
  starting = 5,
  trailing = 5,
): string {
  return address.slice(0, starting) + "..." + address.slice(-trailing);
}

// TODO: Not sure if this function needs to handle string as well or not
export function formatAsUsd(value: number | undefined | null): string {
  if (value === undefined || value === null) {
    return "~$-.--";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
