import { NetworkId, SelectionType } from "@/enums";
import useGetUserTokenBalance from "@/lib/hooks/contract/useGetUserTokenBalance";
import { getTokenInfo } from "@/lib/networks";
import BigNumber from "bignumber.js";
import { atom, useAtomValue } from "jotai";
import { Address } from "viem";
import { useAccount } from "wagmi";

BigNumber.config({ DECIMAL_PLACES: 1e9 });

// Default bridge network configuration, specifying the default 'FROM' and 'TO' networks
const DEFAULT_BRIDGE_NETWORK = {
  [SelectionType.FROM]: NetworkId.Sepolia,
  [SelectionType.TO]: NetworkId.BnbSepolia,
};

// Default to MOCK token
export const bridgeTokenAtom = atom<Address | null>(
  "0x1234567890abcdef1234567890abcdef12345678",
);
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

// Atom to swap the 'FROM' and 'TO' bridge networks
export const swapBridgeNetworkAtom = atom(null, (get, set) => {
  const from = get(bridgeNetworkAtom)[SelectionType.FROM];
  const to = get(bridgeNetworkAtom)[SelectionType.TO];

  set(bridgeNetworkAtom, {
    [SelectionType.FROM]: to,
    [SelectionType.TO]: from,
  });
});

// Custom hook to get the balance of the sending token
export const useBridgeTokenBalance = () => {
  const tokenInfo = useAtomValue(bridgeTokenInfoAtom);
  const networkId = useAtomValue(bridgeNetworkAtom)[SelectionType.FROM];
  const { address } = useAccount();

  const rawBalance = useGetUserTokenBalance({
    tokenAddress: tokenInfo?.address ?? null,
    address: address,
    chainId: networkId,
  });

  if (!tokenInfo || !rawBalance) return null;
  return rawBalance.div(tokenInfo.underlyingDecimals);
};
