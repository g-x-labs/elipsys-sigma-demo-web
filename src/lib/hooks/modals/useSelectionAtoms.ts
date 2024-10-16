// lib/hooks/useSelectionAtoms.ts
import { useAtom } from "jotai";
import {
  fromNetworkAtom,
  fromTokenAtom,
  toNetworkAtom,
  toTokenAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { SelectionType } from "@/enums";

export const useSelectionAtoms = (selectionType = SelectionType.FROM) => {
  const networkAtoms = {
    [SelectionType.FROM]: useAtom(fromNetworkAtom),
    [SelectionType.TO]: useAtom(toNetworkAtom),
  };

  const tokenAtoms = {
    [SelectionType.FROM]: useAtom(fromTokenAtom),
    [SelectionType.TO]: useAtom(toTokenAtom),
  };

  const [selectedNetwork, setSelectedNetwork] = networkAtoms[selectionType];
  const [selectedToken, setSelectedToken] = tokenAtoms[selectionType];

  const swapSelection = () => {
    const [selectedNetworkFrom, setSelectedNetworkFrom] =
      networkAtoms[SelectionType.FROM];
    const [selectedNetworkTo, setSelectedNetworkTo] =
      networkAtoms[SelectionType.TO];

    setSelectedNetworkFrom(selectedNetworkTo);
    setSelectedNetworkTo(selectedNetworkFrom);

    const [selectedTokenFrom, setSelectedTokenFrom] =
      tokenAtoms[SelectionType.FROM];
    const [selectedTokenTo, setSelectedTokenTo] = tokenAtoms[SelectionType.TO];

    setSelectedTokenFrom(selectedTokenTo);
    setSelectedTokenTo(selectedTokenFrom);
  };

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
    swapSelection,
  };
};
