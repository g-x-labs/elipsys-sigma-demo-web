export function abbreviateNumber(value: number, precision: number = 2): string {
  const abbreviations = [
    { limit: 1e12, suffix: "T" }, // Trillions
    { limit: 1e9, suffix: "B" }, // Billions
    { limit: 1e6, suffix: "M" }, // Millions
    { limit: 1e3, suffix: "K" }, // Thousands
  ];

  for (const { limit, suffix } of abbreviations) {
    if (value >= limit) {
      return `${(value / limit).toFixed(precision)}${suffix}`;
    }
  }

  return value.toFixed(precision);
}
