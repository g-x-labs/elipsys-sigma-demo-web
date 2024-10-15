/**
 * getTokenIcon: Returns the icon URL for the specified token. If no icon URL is provided, it returns a fallback URL.
 *
 * @param {string | undefined} iconUrl - The URL of the token's icon.
 * @returns {string} The URL of the token's icon or a fallback URL if none is provided.
 *
 * @example
 * // Example usage:
 * const tokenIcon = getTokenIcon("assets/tokens/usdc.svg");
 * // If the URL is provided, tokenIcon will be "assets/tokens/usdc.svg"
 * // Otherwise, it will return "assets/tokens/token-fallback.svg"
 */
export function getTokenIcon(iconUrl?: string) {
  return iconUrl || "assets/tokens/token-fallback.svg";
}
