import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useAtom } from "jotai";
import {
  selectedNetworkAtom,
  selectedTokenAtom,
} from "@/atoms/tokenNetworkAtom";
import SearchBar from "@/components/ui/Search";
import { whitelistChains } from "@/const/whitelist";

export default function TokenNetworkModal() {
  const [selectedNetwork, setSelectedNetwork] = useAtom(selectedNetworkAtom);
  const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom);

  // TODO: Consider changing name to network
  const chainList = Object.values(whitelistChains);
  const tokenList =
    Object.values(whitelistChains[selectedNetwork].tokens) || [];

  return (
    <Modal modalId="tokenNetworkModal" title="Select">
      <div className="flex flex-col gap-y-2">
        <SearchBar placeholder="Search for tokens" />
        <div className="flex h-96 w-full border-t border-gray-800 pb-4">
          <div className="flex w-[172px] flex-col gap-y-3 overflow-y-auto border-r border-gray-800 pr-3">
            <h3 className="pt-4 text-gray-400 text-sb3">Networks</h3>
            <div>
              {chainList.map((chain) => (
                <ChainPill
                  key={chain.chainId}
                  chain={chain.chainName}
                  isSelected={chain.chainId === selectedNetwork}
                  onSelect={() => {
                    setSelectedNetwork(chain.chainId);
                    setSelectedToken(null);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex w-[252px] flex-col gap-y-3 overflow-y-auto pl-3">
            <h3 className="pt-4 text-gray-400 text-sb3">Tokens</h3>
            <div>
              {tokenList.map((token) => (
                <TokenPill
                  key={token.tokenAddress}
                  tokenName={token.tokenName}
                  ticker={token.tokenSymbol}
                  isSelected={token.tokenAddress === selectedToken}
                  onSelect={() => setSelectedToken(token.tokenAddress)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

// ChainPill component
interface ChainPillProps {
  chain: string;
  isSelected: boolean;
  onSelect: () => void;
}

function ChainPill(props: ChainPillProps) {
  const { chain, isSelected, onSelect } = props;

  return (
    <Button
      variant={"transparent"}
      data-active={isSelected}
      onClick={onSelect}
      className="flex h-[46px] w-full flex-row items-center justify-start gap-x-2 px-3 py-2"
    >
      <div className="h-8 w-8 rounded-lg bg-gray-700"></div>
      <span className="truncate text-gray-400 text-b3">{chain}</span>
    </Button>
  );
}

// TokenPill component
interface TokenPillProps {
  tokenName: string;
  ticker: string;
  isSelected: boolean;
  onSelect: () => void;
}

function TokenPill(props: TokenPillProps) {
  const { tokenName, ticker, isSelected, onSelect } = props;

  return (
    <Button
      data-active={isSelected}
      onClick={onSelect}
      variant={"transparent"}
      className="flex h-[52px] w-full flex-row items-center justify-start gap-x-2 px-3 py-2"
    >
      <div className="relative w-[44px]">
        <div className="h-9 w-9 rounded-full bg-gray-700"></div>

        <div className="absolute bottom-0 right-0 h-[18px] w-[18px] rounded-[4px] bg-gray-600"></div>
      </div>
      <div className="flex flex-col items-start gap-y-[6px]">
        <span className="truncate text-gray-600 text-sb3">{tokenName}</span>
        <span className="truncate uppercase text-gray-400 text-b3">
          {ticker}
        </span>
      </div>
    </Button>
  );
}
