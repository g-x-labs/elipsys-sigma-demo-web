// lib/hooks/useSelectionAtoms.ts
import { useAtom } from "jotai";
import {
  fromNetworkAtom,
  fromTokenAtom,
  toNetworkAtom,
  toTokenAtom,
} from "@/atoms/bridge/tokenNetworkAtom";
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
    //INFO: swap network values
    networkAtoms[SelectionType.FROM][1](networkAtoms[SelectionType.TO][0]);
    networkAtoms[SelectionType.TO][1](networkAtoms[SelectionType.FROM][0]);

    //INFO: swap token values
    tokenAtoms[SelectionType.FROM][1](tokenAtoms[SelectionType.TO][0]);
    tokenAtoms[SelectionType.TO][1](tokenAtoms[SelectionType.FROM][0]);
  };

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
    swapSelection,
  };
};
