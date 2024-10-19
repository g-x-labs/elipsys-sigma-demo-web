import { NetworkId, SelectionType } from "@/enums";
import { getTokenInfo } from "@/lib/networks";
import { atom } from "jotai";
import { Address } from "viem";

// Default bridge network configuration, specifying the default 'FROM' and 'TO' networks
const DEFAULT_BRIDGE_NETWORK = {
  [SelectionType.FROM]: NetworkId.Sepolia,
  [SelectionType.TO]: NetworkId.OptimismSepolia,
};

export const bridgeTokenAtom = atom<Address | null>(null);
export const bridgeNetworkAtom = atom(DEFAULT_BRIDGE_NETWORK);

// Atom to get a TokenInfo for a sending token
export const bridgeTokenInfoAtom = atom((get) => {
  const selectedToken = get(bridgeTokenAtom);
  const selectedNetwork = get(bridgeNetworkAtom)[SelectionType.FROM];
  return getTokenInfo(selectedNetwork, selectedToken);
});

// Atom to store the current selection type (either 'FROM' or 'TO') for the network selection modal; call this when open the select token modal
export const selectionTypeAtom = atom<SelectionType>(SelectionType.FROM);

// Atom to handle the currently selected bridge network based on the selection type ('FROM' or 'TO'); use only in select token modal
export const selectingBridgeNetworkAtom = atom(
  (get) => {
    const selectionType = get(selectionTypeAtom);
    return get(bridgeNetworkAtom)[selectionType];
  },
  (get, set, newSelectedNetwork: NetworkId) => {
    const selectionType = get(selectionTypeAtom);
    const otherBridgeNetwork =
      get(bridgeNetworkAtom)[
        selectionType === SelectionType.FROM
          ? SelectionType.TO
          : SelectionType.FROM
      ];

    // If the new selected network is the same as the other network, swap them to avoid conflicts
    if (newSelectedNetwork === otherBridgeNetwork) {
      set(swapBridgeNetworkAtom);
    } else {
      // Otherwise, update the network for the current selection type
      set(bridgeNetworkAtom, (prev) => ({
        ...prev,
        [selectionType]: newSelectedNetwork,
      }));
    }
  },
);

// Atom to swap the 'FROM' and 'TO' bridge networks; use only with swap button
export const swapBridgeNetworkAtom = atom(null, (get, set) => {
  const from = get(bridgeNetworkAtom)[SelectionType.FROM];
  const to = get(bridgeNetworkAtom)[SelectionType.TO];

  set(bridgeNetworkAtom, {
    [SelectionType.FROM]: to,
    [SelectionType.TO]: from,
  });
});
