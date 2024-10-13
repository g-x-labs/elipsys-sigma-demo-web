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

export function formatTokenAmount(value: bigint | undefined | null): string {
  if (value === undefined || value === null) {
    return "--";
  }

  // TODO: Not sure if this need <0.000000001 case

  const decimals = 18; // Ethereum Standard
  const precision = 8; // Up to 8 decimals to show
  const divisor = BigInt(10 ** decimals);

  const formattedValue = Number(value) / Number(divisor);

  // TODO: Reconsider if this should show suffix or show exponential
  // TODO: Also this can be its own little function
  if (formattedValue >= 1e9) {
    return (formattedValue / 1e9).toFixed(2) + "b"; // Billions
  } else if (formattedValue >= 1e6) {
    return (formattedValue / 1e6).toFixed(2) + "m"; // Millions
  } else if (formattedValue >= 1e3) {
    return (formattedValue / 1e3).toFixed(2) + "k"; // Thousands
  }

  return formattedValue.toFixed(precision).replace(/\.?0+$/, "");
}

export const tokenAmountInputFilter = (input: string): string => {
  // Remove any invalid characters (anything that is not a digit or a decimal point)
  input = input.replace(/[^0-9.]/g, "");

  // Enforce a single decimal point
  const parts = input.split(".");
  if (parts.length > 2) {
    input = `${parts[0]}.${parts[1]}`;
  }

  // Allow up to 18 decimal places for non-zero values
  if (parts.length === 2 && parts[1].length > 18) {
    input = `${parts[0]}.${parts[1].slice(0, 18)}`;
  }

  // Allow "0." with unlimited zeros for input like "0.00..."
  if (input.startsWith("0") && !input.startsWith("0.") && input !== "0") {
    input = input.replace(/^0+/, ""); // Strip leading zeros except for "0."
  }

  // Handle cases where input is below the minimum allowed value (1e-18)
  const inputNum = parseFloat(input);
  if (inputNum !== 0 && inputNum < 1e-18) {
    return "0.000000000000000001"; // Force minimum value of 1e-18
  }

  return input;
};
