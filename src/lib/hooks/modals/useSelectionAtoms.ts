// lib/hooks/useSelectionAtoms.ts
import { useAtom } from "jotai";
import {
  fromNetworkAtom,
  fromTokenAtom,
  toNetworkAtom,
  toTokenAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { SelectionType } from "@/enums";

export const useSelectionAtoms = (selectionType: SelectionType) => {
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

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
  };
};
