import { useAtom } from "jotai";
import {
  fromNetworkAtom,
  fromTokenAtom,
  toNetworkAtom,
  toTokenAtom,
} from "@/atoms/bridge/tokenNetworkAtom";
import { SelectionType } from "@/enums";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";

export const useTransactionInfo = (selectionType = SelectionType.FROM) => {
  const networkAtoms = {
    [SelectionType.FROM]: useAtom(fromNetworkAtom),
    [SelectionType.TO]: useAtom(toNetworkAtom),
  };

  const tokenAtoms = {
    [SelectionType.FROM]: useAtom(fromTokenAtom),
    [SelectionType.TO]: useAtom(toTokenAtom),
  };

  const [selectedNetwork] = networkAtoms[selectionType];
  const [selectedToken] = tokenAtoms[selectionType];

  const token = getTokenInfo(selectedNetwork, selectedToken);
  const network = getNetworkInfo(selectedNetwork);

  return {
    token,
    network,
  };
};
