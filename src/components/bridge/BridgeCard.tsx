import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import SwapIcon from "@/assets/icons/swap.svg";
import BigNumber from "bignumber.js";
import {
  BridgeButton,
  BridgeWalletConnect,
  TokenInput,
  TokenOutput,
} from "@/components/bridge";
import { TransactionDetails } from "@/components/shared";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const BridgeCard: React.FC = () => {
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
