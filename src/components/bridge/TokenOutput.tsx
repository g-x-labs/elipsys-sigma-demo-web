"use client";

import { Input } from "@/components/ui";
import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatAsUsd } from "@/lib/utils/formats";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { toNetworkAtom, toTokenAtom } from "@/atoms/modal/tokenNetworkAtom";
import { useAtomValue } from "jotai";
import { SelectionType } from "@/enums";

const TokenOutput: React.FC = () => {
  const usdValue = null;

  const tokenAddress = useAtomValue(toTokenAtom);
  const networkId = useAtomValue(toNetworkAtom);

  const tokenInfo = getTokenInfo(networkId, tokenAddress);
  const networkInfo = getNetworkInfo(networkId);

  return (
    <div className="flex w-full flex-col rounded-md border border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-700">
        <TokenSelector selectionType={SelectionType.TO} tokenInfo={tokenInfo} />
        <NetworkSelector
          selectionType={SelectionType.TO}
          networkInfo={networkInfo}
        />
      </div>
      <div className="flex p-4">
        <Input value="-" disabled />
        <div className="flex flex-col items-end justify-between">
          <span className="text-gray-400 text-sb3">USD</span>
          <span className="text-gray-400 text-sb3">
            {formatAsUsd(usdValue)}
          </span>
        </div>
      </div>
    </div>
  );
};

export { TokenOutput };
