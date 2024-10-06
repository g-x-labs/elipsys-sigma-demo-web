import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Tooltip from "@/components/ui/Tooltip";

export default function SwapBody() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-row gap-x-1">
            <p className="text-gray-600 text-sb3">Est. Cost</p>
            <Tooltip
              content="Estimated cost of transaction"
              contentProps={{ className: "w-full max-w-[200px]" }}
              trigger={<InfoIcon className="w-3 fill-gray-200" />}
            />
          </div>
          <p className="flex flex-row items-center gap-x-1 text-gray-600 text-sb3">
            -- <RightArrowIcon className="w-3 fill-gray-600" /> --
          </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-gray-600 text-sb3">Est. Time to Destination</p>
          <p className="text-gray-600 text-sb3">--</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled className="w-full">
          Enter Amount
        </Button>
      </CardFooter>
    </Card>
  );
}
