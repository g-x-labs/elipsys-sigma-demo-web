"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import TokenNetworkSelector from "@/components/home/swap/TokenNetworkSelector";
import {
  formatAsUsd,
  formatTokenAmount,
  tokenAmountInputFilter,
} from "@/lib/utils/format";
import { useAtom } from "jotai";
import { tokenInputAtom } from "@/atoms/inputAtom";
import { NetworkId } from "@/types/utils";
import { Address } from "viem";
import { getNetworkInfo, getTokenInfo } from "@/const/whitelist";
import { InputType } from "@/atoms/tokenNetworkAtom";
interface TokenInputProps {
  tokenAddress: Address | null;
  networkId: NetworkId | null;
  inputType: InputType;
  isReadOnly?: boolean;
  onMaxClick?: () => void;
}

export default function TokenInput(props: TokenInputProps) {
  const usdValue = null;
  const tokenBalance = null;

  const { tokenAddress, networkId, inputType, isReadOnly, onMaxClick } = props;

  const [inputValue, setInputValue] = useAtom(tokenInputAtom);

  const tokenInfo = getTokenInfo(networkId, tokenAddress);
  const networkInfo = getNetworkInfo(networkId);

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
          <Button size={"small"} onClick={onMaxClick}>
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
}
