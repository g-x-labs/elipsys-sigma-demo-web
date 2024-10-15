"use client";

import { Button, Input } from "@/components/ui";
import { TokenNetworkSelector } from "@/components/bridge";
import {
  formatAsUsd,
  formatTokenAmount,
  tokenAmountInputFilter,
} from "@/lib/utils/formats";
import { useAtom } from "jotai";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";
import { Address } from "viem";
import useGetUserTokenBalance from "@/lib/hooks/wallet/useGetUserTokenBalance";
import { useAccount } from "wagmi";
import BigNumber from "bignumber.js";
import { InputType, NetworkId } from "@/enums";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

interface TokenInputProps {
  tokenAddress: Address | null;
  networkId: NetworkId | null;
  inputType: InputType;
  isReadOnly?: boolean;
  onMaxClick?: (tokenBalance: BigNumber) => void;
}

const TokenInput: React.FC<TokenInputProps> = (props) => {
  const usdValue = null;

  const {
    tokenAddress,
    networkId,
    inputType,
    isReadOnly,
    onMaxClick = () => {},
  } = props;

  const [inputValue, setInputValue] = useAtom(tokenInputAtom);
  const { address } = useAccount();

  const tokenInfo = getTokenInfo(networkId, tokenAddress);
  const networkInfo = getNetworkInfo(networkId);

  const tokenBalance =
    useGetUserTokenBalance({
      tokenAddress,
      address,
      chainId: networkId,
    }) ?? BigNumber(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(tokenAmountInputFilter(value));
  };

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
        {!isReadOnly && (
          <Button
            size={"small"}
            onClick={() => {
              onMaxClick(tokenBalance);
            }}
          >
            <span className="text-sb3">Max</span>
          </Button>
        )}
        <Input
          value={isReadOnly ? "-" : inputValue}
          disabled={isReadOnly}
          placeholder="0"
          onChange={handleInputChange}
        />
        <div className="flex flex-col items-end justify-between">
          <span className="text-gray-400 text-sb3">
            {isReadOnly ? "USD" : "Balance"}
          </span>
          <span className="text-gray-400 text-sb3">
            {isReadOnly
              ? formatAsUsd(usdValue)
              : formatTokenAmount(tokenBalance)}
          </span>
        </div>
      </div>
    </div>
  );
};

export { TokenInput };
