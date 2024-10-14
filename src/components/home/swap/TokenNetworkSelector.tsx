"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/lib/hooks/useModalAtom";
import { ModalIds } from "@/types/modals";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { NetworkInfo, TokenInfo } from "@/types/utils";
import { getTokenIcon } from "@/lib/utils/iconUtils";

interface TokenNetworkSelectorProps {
  networkInfo?: NetworkInfo | null;
  tokenInfo?: TokenInfo | null;
  variant?: "token" | "network";
}

export default function TokenNetworkSelector(props: TokenNetworkSelectorProps) {
  const { networkInfo, tokenInfo, variant = "token" } = props;

  const { openModal } = useModal(ModalIds.TokenNetworkModal);

  const isToken = variant === "token";

  const tokenIcon = getTokenIcon(tokenInfo?.iconUrl);
  const displayName = isToken ? tokenInfo?.symbol : networkInfo?.name;

  return (
    <Button
      onClick={openModal}
      variant={isToken ? "tokenSelector" : "networkSelector"}
      size="large"
      className="w-full min-w-[120px]"
    >
      <div className="flex w-full items-center gap-x-2">
        {isToken &&
          (tokenInfo ? (
            <Image
              src={getTokenIcon(tokenIcon)}
              alt="token icon"
              width={32}
              height={32}
              className="h-8 w-8 flex-shrink-0 rounded-full"
            />
          ) : (
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-600" />
          ))}

        <div className="flex w-full flex-col items-start gap-y-[6px]">
          <span className="text-gray-400 text-sb3">
            {isToken ? "Token" : "Network"}
          </span>
          <div className="flex flex-row items-center gap-x-1">
            <span className="text-gray-400 text-b2">
              {displayName ? displayName : "Select"}
            </span>
            <ChevronDownIcon className="w-3 fill-gray-400" />
          </div>
        </div>
      </div>
    </Button>
  );
}
