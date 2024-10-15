import { NetworkId } from "@/enums";
import { NetworkInfo } from "@/types";
import { whitelistNetworks } from "@/lib/whitelist";

export function getNetworkInfo(id: NetworkId | null): NetworkInfo | null {
  if (!id) return null;
  return whitelistNetworks[id];
}
