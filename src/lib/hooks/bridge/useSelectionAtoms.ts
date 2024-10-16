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
    const [networkFrom, setNetworkFrom] = networkAtoms[SelectionType.FROM];
    const [networkTo, setNetworkTo] = networkAtoms[SelectionType.TO];

    const [tokenFrom, setTokenFrom] = tokenAtoms[SelectionType.FROM];
    const [tokenTo, setTokenTo] = tokenAtoms[SelectionType.TO];

    setNetworkFrom(networkTo);
    setNetworkTo(networkFrom);

    setTokenFrom(tokenTo);
    setTokenTo(tokenFrom);
  };

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
    swapSelection,
  };
};
