"use client";

import { Button, Input } from "@/components/ui";
import { NetworkSelector, TokenSelector } from "@/components/bridge";
import { formatTokenAmount, tokenAmountInputFilter } from "@/lib/utils/formats";
import { useAtom } from "jotai";
import { tokenInputAtom } from "@/atoms/bridge/inputAtom";
import useGetUserTokenBalance from "@/lib/hooks/wallet/useGetUserTokenBalance";
import { useAccount } from "wagmi";
import BigNumber from "bignumber.js";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { SelectionType } from "@/enums";
import { useSelectionAtoms } from "@/lib/hooks/bridge/useSelectionAtoms";

const TokenInput: React.FC = () => {
  const [inputValue, setInputValue] = useAtom(tokenInputAtom);
  const { address } = useAccount();

  const { selectedNetwork, selectedToken } = useSelectionAtoms(
    SelectionType.FROM,
  );

  const tokenInfo = getTokenInfo(selectedNetwork, selectedToken);
  const networkInfo = getNetworkInfo(selectedNetwork);

  const tokenBalance =
    useGetUserTokenBalance({
      tokenAddress: selectedToken,
      address: address,
      chainId: selectedNetwork,
    }) ?? BigNumber(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(tokenAmountInputFilter(value));
  };

  const onSetInputValue = (tokenBalance: BigNumber) => {
    setInputValue(tokenAmountInputFilter(tokenBalance.toString()));
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
