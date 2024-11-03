"use client";

import { Button, Card, CardFooter, CardHeader } from "@/components/ui";
import SwapIcon from "@/assets/icons/swap.svg";
import BigNumber from "bignumber.js";
import {
  BridgeWalletConnect,
  TokenInput,
  TokenOutput,
} from "@/components/bridge";
// import { useModal } from "@/lib/hooks/modals/useModalAtom";
// import { ModalIds } from "@/enums";
import { useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";
import {
  bridgeTokenInfoAtom,
  swapBridgeNetworkAtom,
  useBridgeTokenBalance,
} from "@/atoms/bridge/tokenNetworkAtom";
import { useBridgeTransactionHandler } from "@/lib/hooks/bridge";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const BridgeCard: React.FC = () => {
  const swapSelection = useSetAtom(swapBridgeNetworkAtom);
  const inputTokenAmount = useAtomValue(tokenInputAtom);
  const tokenInfo = useAtomValue(bridgeTokenInfoAtom);
  const tokenBalance = useBridgeTokenBalance();

  // const { openModal } = useModal(ModalIds.TransactionOverviewModal);
  const { startBridgeTransaction, isPending } = useBridgeTransactionHandler();

  const ctaText = useCallback(() => {
    if (!tokenInfo) return "Select token";
    if (!inputTokenAmount || BigNumber(inputTokenAmount).isZero())
      return "Enter Amount";
    if (BigNumber(inputTokenAmount).gt(tokenBalance ?? BigNumber(0)))
      return "Insufficient Balance";
    if (isPending) return "Loading";
    return "Transfer";
  }, [inputTokenAmount, tokenBalance, tokenInfo, isPending]);

  const isCtaDisabled =
    isPending ||
    !tokenInfo ||
    !inputTokenAmount ||
    BigNumber(inputTokenAmount).isZero() ||
    BigNumber(inputTokenAmount).gt(tokenBalance ?? BigNumber(0));

  return (
    <Card>
      <CardHeader className="items-center gap-y-4">
        <div className="flex w-full flex-col gap-y-2">
          <BridgeWalletConnect />
          <TokenInput />
        </div>
        <Button variant="transparent" size="fit" onClick={swapSelection}>
          <SwapIcon className="w-5 fill-gray-200" />
        </Button>
        <div className="flex w-full flex-col gap-y-2">
          <TokenOutput />
        </div>
      </CardHeader>
      <CardFooter>
        <Button
          variant="action"
          onClick={() => {
            startBridgeTransaction();
          }}
          className="w-full"
          disabled={isCtaDisabled}
        >
          {ctaText()}
        </Button>
      </CardFooter>
    </Card>
  );
};

export { BridgeCard };
