import { useAtom } from "jotai";
import {
  fromNetworkAtom,
  fromTokenAtom,
  toNetworkAtom,
  toTokenAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { SelectionType } from "@/enums";

export const useSelectionAtoms = (selectionType: SelectionType) => {
  const [networkFrom, setNetworkFrom] = useAtom(fromNetworkAtom);
  const [tokenFrom, setTokenFrom] = useAtom(fromTokenAtom);

  const [networkTo, setNetworkTo] = useAtom(toNetworkAtom);
  const [tokenTo, setTokenTo] = useAtom(toTokenAtom);

  const selectedNetwork =
    selectionType === SelectionType.FROM ? networkFrom : networkTo;
  const setSelectedNetwork =
    selectionType === SelectionType.FROM ? setNetworkFrom : setNetworkTo;

  const selectedToken =
    selectionType === SelectionType.FROM ? tokenFrom : tokenTo;
  const setSelectedToken =
    selectionType === SelectionType.FROM ? setTokenFrom : setTokenTo;

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
  };
};
