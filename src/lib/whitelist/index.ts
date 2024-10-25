import { bnbSepoliaWhitelist } from "./bnbSepolia";
import { sepoliaWhitelist } from "./sepolia";
import { NetworkId } from "@/enums";
import { NetworkInfo } from "@/types";

export const whitelistNetworks: Record<NetworkId, NetworkInfo> = {
  11155111: {
    id: NetworkId.Sepolia,
    name: "Sepolia",
    iconUrl: "assets/networks/ethereum.svg",
    tokens: sepoliaWhitelist,
  },
  97: {
    id: NetworkId.BnbSepolia,
    name: "Binance Smart Chain",
    iconUrl: "assets/networks/bnb.svg",
    tokens: bnbSepoliaWhitelist,
  },
};
