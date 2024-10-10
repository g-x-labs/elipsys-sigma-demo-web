"use client";
import { Button } from "@/components/ui/Button";

import { useModal } from "@/lib/hooks/useModalAtom";
import { ModalIds } from "@/types/modals";
import ChevronDownIcon from "@/assets/icons//ui/chevron_down.svg";

interface TokenNetworkSelectorProps {
  variant?: "token" | "network";
}

export default function TokenNetworkSelector(props: TokenNetworkSelectorProps) {
  const { openModal } = useModal(ModalIds.TokenNetworkModal);

  const { variant = "token" } = props;
  const isToken = variant === "token";

  return (
    <Button
      onClick={openModal}
      variant={isToken ? "tokenSelector" : "networkSelector"}
      size="large"
      className="w-full min-w-[120px]"
    >
      <div className="flex w-full items-center gap-x-2">
        {/* INFO: TokenIcon goes here  */}
        {isToken && (
          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-600" />
        )}

        <div className="flex w-full flex-col items-start gap-y-[6px]">
          <span className="text-gray-400 text-sb3">
            {isToken ? "Token" : "Network"}
          </span>
          <div className="flex flex-row items-center gap-x-1">
            <span className="text-gray-400 text-b2">Select</span>
            <ChevronDownIcon className="w-3 fill-gray-400" />
          </div>
        </div>
      </div>
    </Button>
  );
}
