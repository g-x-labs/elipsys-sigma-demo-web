"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { useModal } from "@/lib/hooks/common/useModalAtom";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { getTokenIcon } from "@/lib/utils/icons";
import { useAtom } from "jotai";
import {
  inputTokenAtom,
  outputTokenAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { TokenInfo } from "@/types";
import { ModalIds } from "@/enums";

interface TokenSelectorProps {
  isInput?: boolean;
  tokenInfo?: TokenInfo | null;
}

const TokenSelector: React.FC<TokenSelectorProps> = (props) => {
  const { isInput = true, tokenInfo } = props;

  const { openModal } = useModal(ModalIds.TokenNetworkSelectorModal);
  const [, setSelectedToken] = useAtom(
    isInput ? inputTokenAtom : outputTokenAtom,
  );

  return (
    <Button
      onClick={() => {
        openModal();
        setSelectedToken(tokenInfo?.address || null);
      }}
      variant="tokenSelector"
      size="large"
      className="w-full min-w-[120px]"
    >
      <div className="flex w-full items-center gap-x-2">
        {tokenInfo ? (
          <Image
            src={getTokenIcon(tokenInfo.iconUrl)}
            alt="token icon"
            width={32}
            height={32}
            className="h-8 w-8 flex-shrink-0 rounded-full"
          />
        ) : (
          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-600" />
        )}

        <div className="flex w-full flex-col items-start gap-y-[6px]">
          <span className="text-gray-400 text-sb3">Token</span>
          <div className="flex w-full flex-row items-center gap-x-1">
            <span className="truncate text-gray-400 text-b2">
              {tokenInfo?.symbol || "Select"}
            </span>
            <ChevronDownIcon className="w-3 flex-shrink-0 fill-gray-400" />
          </div>
        </div>
      </div>
    </Button>
  );
};

export { TokenSelector };
