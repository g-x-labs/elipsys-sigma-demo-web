import { useAtomValue } from "jotai";
import { SelectionType } from "@/enums";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import {
  bridgeNetworkAtom,
  bridgeTokenAtom,
} from "@/atoms/bridge/tokenNetworkAtom";

export const useTransactionInfo = (selectionType = SelectionType.FROM) => {
  const selectedNetwork = useAtomValue(bridgeNetworkAtom);
  const selectedToken = useAtomValue(bridgeTokenAtom);

  const token = getTokenInfo(selectedNetwork[selectionType], selectedToken);
  const network = getNetworkInfo(selectedNetwork[selectionType]);

  return {
    token,
    network,
  };
};
