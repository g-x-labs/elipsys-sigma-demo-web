import Image from "next/image";
import { getNetworkIcon, getTokenIcon } from "@/lib/utils/icons";
import { Address } from "viem";
import {
  formatAddress,
  formatAsUsd,
  formatTokenAmount,
} from "@/lib/utils/formats";
import BigNumber from "bignumber.js";
import { NetworkInfo, TokenInfo } from "@/types";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: Excessive props for now, not sure what is actually needed
interface TokenSummaryProps {
  token: TokenInfo | null;
  tokenAmount: BigNumber;
  // TODO: Make this nullable
  tokenUSDValue: number;
  network: NetworkInfo | null;
  destinationAddress: Address | undefined;
}

const TokenSummary: React.FC<TokenSummaryProps> = (props) => {
  const { token, tokenAmount, tokenUSDValue, network, destinationAddress } =
    props;

  return (
    <div className="flex w-full items-center justify-start gap-x-2 py-2">
      <div className="relative w-[44px]">
        <Image
          src={getTokenIcon(token?.iconUrl)}
          height={36}
          width={36}
          className="flex-shrink-0 rounded-lg"
          alt={token?.name ?? "token"}
        />
        <Image
          src={getNetworkIcon(network?.iconUrl)}
          height={18}
          width={18}
          className="absolute bottom-0 right-0 rounded-[4px]"
          alt={network?.name ?? "network"}
        />
      </div>
      <div className="flex flex-col items-start gap-y-[6px]">
        <span className="truncate text-gray-400 text-b2">
          {formatTokenAmount(tokenAmount)}{" "}
          <span className="truncate uppercase">{token?.symbol}</span>
        </span>
        <span className="truncate text-gray-400 text-sb3">
          {`(${formatAsUsd(tokenUSDValue)}) ${network?.name} ${formatAddress(destinationAddress ?? "")}`}
        </span>
      </div>
    </div>
  );
};

export { TokenSummary };
