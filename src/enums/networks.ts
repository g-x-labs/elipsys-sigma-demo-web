export enum NetworkId {
  Sepolia = 11155111,
  BnbSepolia = 97,
}

export enum WormholeNetworkId {
  Sepolia = 2,
  BnbSepolia = 4,
}

export const wormholeNetworkMap: Record<NetworkId, WormholeNetworkId> = {
  [NetworkId.Sepolia]: WormholeNetworkId.Sepolia,
  [NetworkId.BnbSepolia]: WormholeNetworkId.BnbSepolia,
};
