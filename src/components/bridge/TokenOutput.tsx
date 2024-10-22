"use client";

import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatAsUsd, formatAmountOutput } from "@/lib/utils/formats";
import { getNetworkInfo } from "@/lib/networks";

import { SelectionType } from "@/enums";
import { useAtomValue } from "jotai";
import { outputTokenAmountAtom } from "@/atoms/bridge/inputAtom";
import BigNumber from "bignumber.js";
import { cn } from "@/lib/utils/common/cn";
import {
  bridgeNetworkAtom,
  bridgeTokenInfoAtom,
} from "@/atoms/bridge/tokenNetworkAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TokenOutput: React.FC = () => {
  const quoteValue = useAtomValue(outputTokenAmountAtom);
  const tokenInfo = useAtomValue(bridgeTokenInfoAtom);
  const selectedNetwork = useAtomValue(bridgeNetworkAtom)[SelectionType.TO];

  const networkInfo = getNetworkInfo(selectedNetwork);

  const tokenPrice = 0.01; //INFO: hardcoded value just for demo
  const usdValue = quoteValue?.times(tokenPrice).toNumber() ?? 0;

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
        <div className="flex h-10 w-full items-center overflow-x-hidden bg-transparent px-3 py-2 text-left">
          <span
            className={cn(
              quoteValue?.toString() === "" ? "text-gray-700" : "text-gray-200",
              "text-b1",
            )}
          >
            {formatAmountOutput(quoteValue?.toString())}
          </span>
        </div>
        <div className="flex flex-col items-end justify-center">
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
