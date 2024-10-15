"use client";

import { Button, Input } from "@/components/ui";
import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatTokenAmount, tokenAmountInputFilter } from "@/lib/utils/formats";
import { useAtom, useAtomValue } from "jotai";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";
import useGetUserTokenBalance from "@/lib/hooks/wallet/useGetUserTokenBalance";
import { useAccount } from "wagmi";
import BigNumber from "bignumber.js";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { fromNetworkAtom, fromTokenAtom } from "@/atoms/modal/tokenNetworkAtom";
import { SelectionType } from "@/enums";

const TokenInput: React.FC = () => {
  const [inputValue, setInputValue] = useAtom(tokenInputAtom);
  const { address } = useAccount();

  const tokenAddress = useAtomValue(fromTokenAtom);
  const networkId = useAtomValue(fromNetworkAtom);

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

  const onSetInputValue = (tokenBalance: BigNumber) => {
    //TODO: Implement this
    console.log("Set input value here", tokenBalance.toString());
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
            onSetInputValue(BigNumber(tokenBalance));
          }}
        >
          <span className="text-sb3">Max</span>
        </Button>
        <Input
          value={inputValue}
          placeholder="0"
          onChange={handleInputChange}
        />
        <div className="flex flex-col items-end justify-between">
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
