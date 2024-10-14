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
import {
  networkFromAtom,
  networkToAtom,
  tokenFromAtom,
  tokenToAtom,
} from "@/atoms/tokenNetworkAtom";
import { useAtomValue } from "jotai";

export default function SwapCard() {
  const { openModal } = useModal(ModalIds.TransactionOverviewModal);

  const tokenFrom = useAtomValue(tokenFromAtom);
  const networkFrom = useAtomValue(networkFromAtom);

  const tokenTo = useAtomValue(tokenToAtom);
  const networkTo = useAtomValue(networkToAtom);

  return (
    <Card>
      <CardHeader className="items-center gap-y-4">
        <div className="flex w-full flex-col gap-y-2">
          <BridgeWalletConnect />
          <TokenInput tokenAddress={tokenFrom} networkId={networkFrom} />
        </div>
        {/* TODO: Wrap button on icon */}
        <SwapIcon className="w-5 fill-gray-200" />
        <div className="flex w-full flex-col gap-y-2">
          <TokenInput tokenAddress={tokenTo} networkId={networkTo} isReadOnly />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <TransactionDetail
          label="Est. Cost"
          value={null}
          secondaryValue={null}
          tooltip="Estimated cost of transaction"
        />
        <TransactionDetail label="Est. Time to Destination" value={null} />
      </CardContent>
      <CardFooter>
        <Button variant={"action"} onClick={openModal} className="w-full">
          Enter Amount
        </Button>
      </CardFooter>
    </Card>
  );
}
