import { NetworkId, SelectionType } from "@/enums";
import { getTokenInfo } from "@/lib/networks";
import { atom } from "jotai";
import { Address } from "viem";

const DEFAULT_BRIDGE_NETWORK = {
  [SelectionType.FROM]: NetworkId.Sepolia,
  [SelectionType.TO]: NetworkId.OptimismSepolia,
};

export const bridgeTokenAtom = atom<Address | null>(null);
export const bridgeNetworkAtom = atom(DEFAULT_BRIDGE_NETWORK);

export const bridgeTokenInfoAtom = atom((get) => {
  const selectedToken = get(bridgeTokenAtom);
  const selectedNetwork = get(bridgeNetworkAtom)[SelectionType.FROM];
  return getTokenInfo(selectedNetwork, selectedToken);
});

// INFO: only for open network selection modal
export const selectionTypeAtom = atom<SelectionType>(SelectionType.FROM);
export const selectingBridgeNetworkAtom = atom(
  (get) => {
    const selectionType = get(selectionTypeAtom);
    return get(bridgeNetworkAtom)[selectionType];
  },
  (get, set, newSelectedNetwork: NetworkId) => {
    const selectionType = get(selectionTypeAtom);
    set(bridgeNetworkAtom, (prev) => ({
      ...prev,
      [selectionType]: newSelectedNetwork,
    }));
  },
);

// INFO: only for swap button
export const swapBridgeNetworkAtom = atom(null, (get, set) => {
  const from = get(bridgeNetworkAtom)[SelectionType.FROM];
  const to = get(bridgeNetworkAtom)[SelectionType.TO];
  set(bridgeNetworkAtom, {
    [SelectionType.FROM]: to,
    [SelectionType.TO]: from,
  });
});
