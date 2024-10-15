"use client";

import { Input } from "@/components/ui";
import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatAsUsd } from "@/lib/utils/formats";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { networkToAtom, tokenToAtom } from "@/atoms/modal/tokenNetworkAtom";
import { useAtomValue } from "jotai";

const TokenOutput: React.FC = () => {
  const usdValue = null;

  const tokenAddress = useAtomValue(tokenToAtom);
  const networkId = useAtomValue(networkToAtom);

  const tokenInfo = getTokenInfo(networkId, tokenAddress);
  const networkInfo = getNetworkInfo(networkId);

  return (
    <div className="flex w-full flex-col rounded-md border border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-700">
        <TokenSelector isInput={false} tokenInfo={tokenInfo} />
        <NetworkSelector isInput={false} networkInfo={networkInfo} />
      </div>
      <div className="flex p-4">
        {/* INFO: This no longer needs to be <Input /> but for consistency, we can leave it like this */}
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
