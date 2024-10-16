import {
  fromNetworkAtom,
  fromTokenAtom,
  toNetworkAtom,
  toTokenAtom,
} from "@/atoms/bridge/tokenNetworkAtom";
import { SelectionType } from "@/enums";

export const getSelectionAtoms = (selectionType: SelectionType) => {
  const networkAtoms = {
    [SelectionType.FROM]: fromNetworkAtom,
    [SelectionType.TO]: toNetworkAtom,
  };

  const tokenAtoms = {
    [SelectionType.FROM]: fromTokenAtom,
    [SelectionType.TO]: toTokenAtom,
  };

  return {
    networkAtom: networkAtoms[selectionType],
    tokenAtom: tokenAtoms[selectionType],
  };
};
