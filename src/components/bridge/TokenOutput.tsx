"use client";

import { Input } from "@/components/ui";
import { TokenNetworkSelector } from "@/components/bridge";
import { formatAsUsd } from "@/lib/utils/formats";
import { Address } from "viem";
import { InputType, NetworkId } from "@/enums";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";

interface TokenOutputProps {
  tokenAddress: Address | null;
  networkId: NetworkId | null;
  inputType: InputType;
}

const TokenOutput: React.FC<TokenOutputProps> = (props) => {
  const { tokenAddress, networkId, inputType } = props;

  const usdValue = null;

  const tokenInfo = getTokenInfo(networkId, tokenAddress);
  const networkInfo = getNetworkInfo(networkId);

  return (
    <div className="flex w-full flex-col rounded-md border border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-700">
        <TokenNetworkSelector
          variant="token"
          tokenInfo={tokenInfo}
          inputType={inputType}
        />
        <TokenNetworkSelector
          variant="network"
          networkInfo={networkInfo}
          inputType={inputType}
        />
      </div>
      <div className="flex items-center justify-between p-4">
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
