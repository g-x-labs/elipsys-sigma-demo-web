import { useAtom } from "jotai";
import { SelectionType } from "@/enums";
import { getSelectionAtoms } from "@/lib/utils/atoms";

export const useSelectionAtoms = (selectionType = SelectionType.FROM) => {
  const { networkAtom, tokenAtom } = getSelectionAtoms(selectionType);

  const [selectedNetwork, setSelectedNetwork] = useAtom(networkAtom);
  const [selectedToken, setSelectedToken] = useAtom(tokenAtom);

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
  };
};
