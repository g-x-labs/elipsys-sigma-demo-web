import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export function formatTokenAmount(value: BigNumber | undefined | null): string {
  if (value === undefined || value === null) {
    return "--";
  }

  // TODO: Not sure if this need <0.000000001 case

  const decimals = 18; // Ethereum Standard
  const precision = 8; // Up to 8 decimals to show
  const divisor = BigNumber(10 ** decimals);

  const formattedValue = Number(value.div(divisor));

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
