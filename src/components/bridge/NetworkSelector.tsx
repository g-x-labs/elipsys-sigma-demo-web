"use client";

import { Button } from "@/components/ui";
import { useModal } from "@/lib/hooks/modals/useModalAtom";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { useSetAtom } from "jotai";
import { selectionTypeAtom } from "@/atoms/bridge/tokenNetworkAtom";
import { NetworkInfo } from "@/types";
import { ModalIds, SelectionType } from "@/enums";

interface NetworkSelectorProps {
  selectionType: SelectionType;
  networkInfo?: NetworkInfo | null;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  selectionType,
  networkInfo,
}) => {
  const { openModal } = useModal(ModalIds.TokenNetworkSelectorModal);

  const setSelectionType = useSetAtom(selectionTypeAtom);

  const handleOnClick = () => {
    setSelectionType(selectionType);
    openModal();
  };

  return (
    <Button
      onClick={handleOnClick}
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
