import { useAtom } from "jotai";
import { SelectionType } from "@/enums";
import { getSelectionAtoms } from "@/lib/utils/atoms";

export const useSwapSelection = () => {
  const { networkAtom: fromNetworkAtom, tokenAtom: fromTokenAtom } =
    getSelectionAtoms(SelectionType.FROM);
  const { networkAtom: toNetworkAtom, tokenAtom: toTokenAtom } =
    getSelectionAtoms(SelectionType.TO);

  const [networkFrom, setNetworkFrom] = useAtom(fromNetworkAtom);
  const [networkTo, setNetworkTo] = useAtom(toNetworkAtom);

  const [tokenFrom, setTokenFrom] = useAtom(fromTokenAtom);
  const [tokenTo, setTokenTo] = useAtom(toTokenAtom);

  const swapSelection = () => {
    setNetworkFrom(networkTo);
    setNetworkTo(networkFrom);

    setTokenFrom(tokenTo);
    setTokenTo(tokenFrom);
  };

  return { swapSelection };
};
