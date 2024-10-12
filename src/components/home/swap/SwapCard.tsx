"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import SwapIcon from "@/assets/icons/swap.svg";
import TransactionDetail from "@/components/shared/TransactionDetails";
import TokenInput from "@/components/home/swap/TokenInput";
import BridgeWalletConnect from "./BridgeWalletConnect";
import { useModal } from "@/lib/hooks/useModalAtom";
import { ModalIds } from "@/types/modals";

export default function SwapCard() {
  const { openModal } = useModal(ModalIds.TransactionOverviewModal);

  return (
    <Card>
      <CardHeader className="items-center gap-y-4">
        <div className="flex w-full flex-col gap-y-2">
          <BridgeWalletConnect />
          <TokenInput />
        </div>
        {/* TODO: Wrap button on icon */}
        <SwapIcon className="w-5 fill-gray-200" />
        <div className="flex w-full flex-col gap-y-2">
          <TokenInput isReadOnly value="-" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <TransactionDetail
          label="Est. Cost"
          value="--"
          secondaryValue="--"
          tooltip="Estimated cost of transaction"
        />
        <TransactionDetail label="Est. Time to Destination" value="--" />
      </CardContent>
      <CardFooter>
        <Button variant={"action"} onClick={openModal} className="w-full">
          Enter Amount
        </Button>
      </CardFooter>
    </Card>
  );
}
