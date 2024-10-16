import { useAtom } from "jotai";
import { SelectionType } from "@/enums";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { getSelectionAtoms } from "@/lib/utils/atoms";

export const useTransactionInfo = (selectionType = SelectionType.FROM) => {
  const { networkAtom, tokenAtom } = getSelectionAtoms(selectionType);

  const [selectedNetwork] = useAtom(networkAtom);
  const [selectedToken] = useAtom(tokenAtom);

  const token = getTokenInfo(selectedNetwork, selectedToken);
  const network = getNetworkInfo(selectedNetwork);

  return {
    token,
    network,
  };
};
