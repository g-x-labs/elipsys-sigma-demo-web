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
  BridgeButton,
  BridgeWalletConnect,
  TokenInput,
  TokenOutput,
} from "@/components/bridge";
import { TransactionDetails } from "@/components/shared";
import { useSelectionAtoms } from "@/lib/hooks/modals/useSelectionAtoms";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const BridgeCard: React.FC = () => {
  const { swapSelection } = useSelectionAtoms();
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
        <BridgeButton />
      </CardFooter>
    </Card>
  );
};

export { BridgeCard };
