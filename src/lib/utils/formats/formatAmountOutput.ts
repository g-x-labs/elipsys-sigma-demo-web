export const formatAmountOutput = (
  value: string | number | undefined | null,
  precision = 2,
): string => {
  if (value === undefined || value === null) {
    return "--";
  }

  return Number(value)
    .toFixed(precision)
    .replace(/\.?0+$/, "");
};
