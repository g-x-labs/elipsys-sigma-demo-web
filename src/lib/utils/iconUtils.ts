/**
 * getWalletIcon: Returns the file path to the wallet's icon based on the wallet name.
 *
 * @param {string | undefined} name - The name of the wallet.
 * @returns {string} The file path of the corresponding wallet icon.
 *
 * @example
 * // Example usage:
 * const iconPath = getWalletIcon("MetaMask");
 * // iconPath will be "assets/wallets/metamask.svg"
 */
export function getWalletIcon(name: string | undefined) {
  switch (name) {
    case "MetaMask":
      return "assets/wallets/metamask.svg";
    case "Rabby Wallet":
      return "assets/wallets/rabby.svg";
    case "OKX Wallet":
      return "assets/wallets/okx.svg";
    default:
      return "assets/wallets/wallet-fallback.svg";
  }
}

/**
 * getNetworkIcon: Returns the icon URL for the specified chain. If no icon URL is provided, it returns a fallback URL.
 *
 * @param {string | undefined} iconUrl - The URL of the chain's icon.
 * @returns {string} The URL of the chain's icon or a fallback URL if none is provided.
 *
 * @example
 * // Example usage:
 * const chainIcon = getNetworkIcon("assets/networks/ethereum.svg");
 * // If the URL is provided, chainIcon will be "assets/networks/ethereum.svg"
 * // Otherwise, it will return "assets/networks/network-fallback.svg"
 */
export function getNetworkIcon(iconUrl?: string) {
  return iconUrl || "assets/networks/network-fallback.svg";
}

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
