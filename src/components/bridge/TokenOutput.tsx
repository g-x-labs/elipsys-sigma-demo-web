"use client";

import { Input } from "@/components/ui";
import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatAsUsd } from "@/lib/utils/formats";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";

import { SelectionType } from "@/enums";
import { useSelectionAtoms } from "@/lib/hooks/bridge/useSelectionAtoms";

const TokenOutput: React.FC = () => {
  const usdValue = null;

  const { selectedNetwork, selectedToken } = useSelectionAtoms(
    SelectionType.TO,
  );

  const tokenInfo = getTokenInfo(selectedNetwork, selectedToken);
  const networkInfo = getNetworkInfo(selectedNetwork);

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
