"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import SwapIcon from "@/assets/icons/swap.svg";
import { useModal } from "@/lib/hooks/common/useModalAtom";
import {
  networkFromAtom,
  networkToAtom,
  tokenFromAtom,
  tokenToAtom,
} from "@/atoms/modal/tokenNetworkAtom";
import { useAtomValue } from "jotai";
import BigNumber from "bignumber.js";
import { InputType, ModalIds } from "@/enums";
import { BridgeWalletConnect, TokenInput } from "@/components/bridge";
import { TransactionDetails } from "@/components/shared";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const BridgeCard: React.FC = () => {
  const { openModal } = useModal(ModalIds.TransactionOverviewModal);

  const tokenFrom = useAtomValue(tokenFromAtom);
  const networkFrom = useAtomValue(networkFromAtom);

  const tokenTo = useAtomValue(tokenToAtom);
  const networkTo = useAtomValue(networkToAtom);

  const onSetInputValue = (tokenBalance: BigNumber) => {
    //TODO: Implement this
    console.log("Set input value here", tokenBalance.toString());
  };

  return (
    <Card>
      <CardHeader className="items-center gap-y-4">
        <div className="flex w-full flex-col gap-y-2">
          <BridgeWalletConnect />
          <TokenInput
            tokenAddress={tokenFrom}
            networkId={networkFrom}
            inputType={InputType.FROM}
            onMaxClick={onSetInputValue}
          />
        </div>
        {/* TODO: Wrap button on icon */}
        <SwapIcon className="w-5 fill-gray-200" />
        <div className="flex w-full flex-col gap-y-2">
          <TokenInput
            tokenAddress={tokenTo}
            networkId={networkTo}
            inputType={InputType.TO}
            isReadOnly
          />
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
        <Button variant={"action"} onClick={openModal} className="w-full">
          Enter Amount
        </Button>
      </CardFooter>
    </Card>
  );
};

export { BridgeCard };
