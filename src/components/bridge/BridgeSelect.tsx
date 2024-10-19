"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import WormholeLiteIcon from "@/assets/icons/wormhole-lite.svg";
import WormholeIcon from "@/assets/icons/wormhole.svg";
import { useAtom } from "jotai";
import { bridgeSelectAtom } from "@/atoms/bridge/bridgeSelectAtom";

const BridgeSelect: React.FC = () => {
  const [selectedBridge, setSelectedBridge] = useAtom(bridgeSelectAtom);

  return (
    <Select
      value={selectedBridge}
      onValueChange={(value) => setSelectedBridge(value)}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-lg border border-gray-400 bg-black-700">
        <SelectGroup className="flex flex-col gap-y-1">
          <SelectItem value="wormhole">
            <WormholeIcon className="w-[86px]" />
          </SelectItem>
          <SelectItem value="wormhole-lite">
            <WormholeLiteIcon className="w-[132px]" />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { BridgeSelect };
