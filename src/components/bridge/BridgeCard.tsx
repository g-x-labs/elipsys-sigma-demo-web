"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import SwapIcon from "@/assets/icons/swap.svg";
import BigNumber from "bignumber.js";
import {
  BridgeWalletConnect,
  TokenInput,
  TokenOutput,
} from "@/components/bridge";
import { TransactionDetails } from "@/components/shared";
import { useModal } from "@/lib/hooks/modals/useModalAtom";
import { ModalIds } from "@/enums";
import { useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";
import {
  bridgeTokenInfoAtom,
  swapBridgeNetworkAtom,
  useBridgeTokenBalance,
} from "@/atoms/bridge/tokenNetworkAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const BridgeCard: React.FC = () => {
  const swapSelection = useSetAtom(swapBridgeNetworkAtom);
  const inputTokenAmount = useAtomValue(tokenInputAtom);
  const tokenInfo = useAtomValue(bridgeTokenInfoAtom);
  const tokenBalance = useBridgeTokenBalance();

  const { openModal } = useModal(ModalIds.TransactionOverviewModal);

  const ctaText = useCallback(() => {
    if (!tokenInfo) return "Select token";
    if (!inputTokenAmount || BigNumber(inputTokenAmount).isZero())
      return "Enter Amount";
    if (BigNumber(inputTokenAmount).gt(tokenBalance ?? BigNumber(0)))
      return "Insufficient Balance";
    return "Transfer";
  }, [inputTokenAmount, tokenBalance, tokenInfo]);

  const isCtaDisabled =
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
      <CardContent className="flex flex-col gap-y-2">
        <TransactionDetails
          label="Est. Cost"
          value={null}
          secondaryValue={null}
          tooltip="Estimated cost of transaction"
        />
        <TransactionDetails label="Est. Time to Destination" value={null} />
      </CardContent>
      <CardFooter>
        <Button
          variant={"action"}
          onClick={openModal}
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
