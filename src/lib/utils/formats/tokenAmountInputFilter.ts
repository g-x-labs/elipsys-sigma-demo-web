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

  console.log("input", input);

  return input;
};
