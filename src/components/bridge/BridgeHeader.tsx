import WormholeLiteIcon from "@/assets/icons/wormhole-lite.svg";
import { Button } from "@/components/ui";

export default function BridgeHeader() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-y-5">
      <h2 className="text-gray-200 text-h3">Transfer</h2>
      <hr className="h-0.5 w-full border-black-700" />
      <div className="flex flex-col gap-y-3">
        <h3 className="text-gray-400 text-sb3">Bridge</h3>
        {/* TODO: Replace with dropdown */}
        <Button
          className="border border-gray-600"
          size={"dropdown"}
          variant={"dropdown"}
        >
          <WormholeLiteIcon className="w-[132px]" />
        </Button>
      </div>
    </div>
  );
}
