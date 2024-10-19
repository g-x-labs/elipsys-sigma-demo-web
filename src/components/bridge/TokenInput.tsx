"use client";

import { Button, Input } from "@/components/ui";
import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatTokenAmount, formatAmountInput } from "@/lib/utils/formats";
import { useAtom, useAtomValue } from "jotai";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";
import BigNumber from "bignumber.js";
import { getNetworkInfo } from "@/lib/networks";
import { SelectionType } from "@/enums";
import {
  bridgeNetworkAtom,
  bridgeTokenInfoAtom,
  useBridgeTokenBalance,
} from "@/atoms/bridge/tokenNetworkAtom";

const TokenInput: React.FC = () => {
  const [inputValue, setInputValue] = useAtom(tokenInputAtom);
  const selectedNetwork = useAtomValue(bridgeNetworkAtom)[SelectionType.FROM];
  const tokenInfo = useAtomValue(bridgeTokenInfoAtom);
  const networkInfo = getNetworkInfo(selectedNetwork);
  const tokenBalance = useBridgeTokenBalance();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(formatAmountInput(value));
  };

  const onSetInputValue = (tokenBalance: BigNumber) => {
    setInputValue(formatAmountInput(tokenBalance.toString()));
  };

  return (
    <div className="flex w-full flex-col rounded-md border border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-700">
        <TokenSelector
          selectionType={SelectionType.FROM}
          tokenInfo={tokenInfo}
        />
        <NetworkSelector
          selectionType={SelectionType.FROM}
          networkInfo={networkInfo}
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <Button
          size={"small"}
          onClick={() => {
            onSetInputValue(tokenBalance ?? BigNumber(0));
          }}
        >
          <span className="text-sb3">Max</span>
        </Button>
        <Input
          value={inputValue}
          placeholder="0"
          onChange={handleInputChange}
        />
        <div className="flex flex-col items-end justify-center">
          <span className="text-gray-400 text-sb3">Balance</span>
          <span className="text-gray-400 text-sb3">
            {formatTokenAmount(tokenBalance)}
          </span>
        </div>
      </div>
    </div>
  );
};

export { TokenInput };
