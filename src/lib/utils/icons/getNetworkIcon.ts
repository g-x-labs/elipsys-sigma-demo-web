/**
 * getNetworkIcon: Returns the icon URL for the specified network. If no icon URL is provided, it returns a fallback URL.
 *
 * @param {string | undefined} iconUrl - The URL of the network's icon.
 * @returns {string} The URL of the network's icon or a fallback URL if none is provided.
 *
 * @example
 * // Example usage:
 * const networkIcon = getNetworkIcon("assets/networks/ethereum.svg");
 * // If the URL is provided, chainIcon will be "assets/networks/ethereum.svg"
 * // Otherwise, it will return "assets/networks/network-fallback.svg"
 */
export function getNetworkIcon(iconUrl?: string) {
  return iconUrl || "assets/networks/network-fallback.svg";
}
