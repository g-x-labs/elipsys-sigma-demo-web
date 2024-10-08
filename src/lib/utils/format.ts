export function formatAddress(
  address: string,
  starting = 5,
  trailing = 5,
): string {
  return address.slice(0, starting) + "..." + address.slice(-trailing);
}
