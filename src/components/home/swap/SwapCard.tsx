import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import SwapIcon from "@/assets/icons/swap.svg";
import TransactionDetail from "@/components/home/swap/TransactionDetails";

export default function SwapCard() {
  return (
    <Card>
      <CardHeader className="items-center">
        {/* Token Input */}
        {/* TODO: Wrap in Button */}
        <SwapIcon className="w-5 fill-gray-200" />
        {/* Token Output */}
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
        <Button disabled className="w-full">
          Enter Amount
        </Button>
      </CardFooter>
    </Card>
  );
}
