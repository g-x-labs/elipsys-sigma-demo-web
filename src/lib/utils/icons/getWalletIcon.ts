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
