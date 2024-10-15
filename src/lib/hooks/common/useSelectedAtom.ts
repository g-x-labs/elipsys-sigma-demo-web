import {
  inputNetworkAtom,
  inputTokenAtom,
  outputNetworkAtom,
  outputTokenAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { useAtom } from "jotai";

export const useSelectedAtoms = (isInput: boolean) => {
  const [selectedNetwork, setSelectedNetwork] = useAtom(
    isInput ? inputNetworkAtom : outputNetworkAtom,
  );
  const [selectedToken, setSelectedToken] = useAtom(
    isInput ? inputTokenAtom : outputTokenAtom,
  );
  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
  };
};
