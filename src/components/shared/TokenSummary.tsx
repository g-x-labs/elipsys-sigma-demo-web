import { ChainInfo, TokenInfo } from "@/types/utils";
import Image from "next/image";
import { getChainIcon, getTokenIcon } from "@/lib/utils/iconUtils";
import { Address } from "viem";
import { formatAddress, formatAsUsd } from "@/lib/utils/format";

// TODO: Excessive props for now, not sure what is actually needed
interface TokenSummaryProps {
  token: TokenInfo;
  // TODO: Not sure if this is suppose to be BigNumber
  tokenAmount: string;
  tokenUSDValue: number;
  chain: ChainInfo;
  destinationAddress: Address;
}

export default function TokenSummary(props: TokenSummaryProps) {
  const { token, tokenAmount, tokenUSDValue, chain, destinationAddress } =
    props;

  return (
    <div className="flex w-full items-center justify-start gap-x-2 py-2">
      <div className="relative w-[44px]">
        <Image
          src={getTokenIcon(token.iconUrl)}
          height={36}
          width={36}
          className="flex-shrink-0 rounded-lg"
          alt={token.tokenName ?? "token"}
        />
        <Image
          src={getChainIcon(chain.iconUrl)}
          height={18}
          width={18}
          className="absolute bottom-0 right-0 rounded-[4px]"
          alt={chain.chainName ?? "chain"}
        />
      </div>
      <div className="flex flex-col items-start gap-y-[6px]">
        <span className="truncate text-gray-400 text-b2">
          {tokenAmount}
          <span className="truncate uppercase">{token.tokenSymbol}</span>
        </span>
        <span className="truncate text-gray-400 text-sb3">
          {`(${formatAsUsd(tokenUSDValue)}) ${chain.chainName} ${formatAddress(destinationAddress)}`}
        </span>
      </div>
    </div>
  );
}
