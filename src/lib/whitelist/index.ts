import { optimismSepoliaWhitelist } from "./optimismSepolia";
import { sepoliaWhitelist } from "./sepolia";
import { blastSepoliaWhitelist } from "./blastSepolia";
import { NetworkId } from "@/enums";
import { NetworkInfo } from "@/types";

export const whitelistNetworks: Record<NetworkId, NetworkInfo> = {
  11155111: {
    id: NetworkId.Sepolia,
    name: "Sepolia",
    iconUrl: "assets/networks/ethereum.svg",
    tokens: sepoliaWhitelist,
  },
  11155420: {
    id: NetworkId.OptimismSepolia,
    name: "Optimism Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: optimismSepoliaWhitelist,
  },
  168587773: {
    id: NetworkId.BlastSepolia,
    name: "Blast Sepolia",
    iconUrl: "assets/networks/optimism.svg",
    tokens: blastSepoliaWhitelist,
  },
};
