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

// INFO: Unused for now
export function formatEstimateTime(seconds: number): string {
  if (
    seconds === undefined ||
    seconds === null ||
    isNaN(seconds) ||
    seconds < 0
  ) {
    return "--";
  }

  if (seconds < 60) {
    return `~${seconds} secs`;
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  const formattedMins = mins.toString().padStart(2, "0");
  const formattedSecs = secs.toString().padStart(2, "0");

  return `~${formattedMins}:${formattedSecs} mins`;
}
