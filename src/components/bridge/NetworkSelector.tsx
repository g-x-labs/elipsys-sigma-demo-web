// components/bridge/NetworkSelector.tsx

"use client";

import { Button } from "@/components/ui";
import { useModal } from "@/lib/hooks/common/useModalAtom";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { useAtom } from "jotai";
import {
  inputNetworkAtom,
  outputNetworkAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { NetworkInfo } from "@/types";
import { ModalIds } from "@/enums";

interface NetworkSelectorProps {
  isInput?: boolean;
  networkInfo?: NetworkInfo | null;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  isInput = true,
  networkInfo,
}) => {
  const { openModal } = useModal(ModalIds.TokenNetworkModal);
  const [, setSelectedNetwork] = useAtom(
    isInput ? inputNetworkAtom : outputNetworkAtom,
  );

  return (
    <Button
      onClick={() => {
        openModal();
        // Store the selected network (input or output)
        setSelectedNetwork(networkInfo?.id || null);
      }}
      variant="networkSelector"
      size="large"
      className="w-full min-w-[120px]"
    >
      <div className="flex w-full flex-col items-start gap-y-[6px]">
        <span className="text-gray-400 text-sb3">Network</span>
        <div className="flex w-full flex-row items-center gap-x-1">
          <span className="truncate text-gray-400 text-b2">
            {networkInfo?.name || "Select"}
          </span>
          <ChevronDownIcon className="w-3 flex-shrink-0 fill-gray-400" />
        </div>
      </div>
    </Button>
  );
};

export { NetworkSelector };
