import { NetworkId } from "@/enums";
import { TokenInfo } from "@/types";
import { Address } from "viem";
import { whitelistNetworks } from "@/lib/whitelist";

export function getTokenInfo(
  id: NetworkId | null,
  address: Address | null,
): TokenInfo | null {
  if (!id || !address) return null;
  return whitelistNetworks[id].tokens[address];
}
