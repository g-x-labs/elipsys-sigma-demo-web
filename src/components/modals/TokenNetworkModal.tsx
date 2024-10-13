import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useAtom } from "jotai";
import {
  selectedNetworkAtom,
  selectedTokenAtom,
} from "@/atoms/tokenNetworkAtom";
import SearchBar from "@/components/ui/Search";
import { whitelistNetworks } from "@/const/whitelist";
import Image from "next/image";
import { NetworkInfo, TokenInfo } from "@/types/utils";
import { getChainIcon, getTokenIcon } from "@/lib/utils/iconUtils";

export default function TokenNetworkModal() {
  const [selectedNetwork, setSelectedNetwork] = useAtom(selectedNetworkAtom);
  const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom);

  // TODO: Consider changing name to network
  const networkList = Object.values(whitelistNetworks);
  const tokenList =
    Object.values(whitelistNetworks[selectedNetwork].tokens) || [];

  return (
    <Modal modalId="tokenNetworkModal" title="Select">
      <div className="flex flex-col gap-y-2">
        <SearchBar placeholder="Search for tokens" />
        <div className="flex h-96 w-full border-t border-gray-800 pb-4">
          <div className="flex w-[172px] flex-col gap-y-3 overflow-y-auto border-r border-gray-800 pr-3">
            <h3 className="pt-4 text-gray-400 text-sb3">Networks</h3>
            <div>
              {networkList.map((network) => (
                <NetworkPill
                  key={network.networkId}
                  network={network}
                  isSelected={network.networkId === selectedNetwork}
                  onSelect={() => {
                    setSelectedNetwork(network.networkId);
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
                  token={token}
                  chain={whitelistNetworks[selectedNetwork]}
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

// NetworkPill component
interface NetworkPillProps {
  network: NetworkInfo;
  isSelected: boolean;
  onSelect: () => void;
}

function NetworkPill(props: NetworkPillProps) {
  const { network, isSelected, onSelect } = props;

  return (
    <Button
      variant={"transparent"}
      data-active={isSelected}
      onClick={onSelect}
      className="flex h-[46px] w-full flex-row items-center justify-start gap-x-2 px-3 py-2"
    >
      <Image
        src={getChainIcon(network.iconUrl)}
        height={32}
        width={32}
        className="flex-shrink-0 rounded-lg"
        alt={network.networkName ?? "chain"}
      />
      <span className="truncate text-gray-400 text-b3">
        {network.networkName}
      </span>
    </Button>
  );
}

// TokenPill component
interface TokenPillProps {
  token: TokenInfo;
  chain: NetworkInfo;
  isSelected: boolean;
  onSelect: () => void;
}

function TokenPill(props: TokenPillProps) {
  const { token, chain, isSelected, onSelect } = props;

  return (
    <Button
      data-active={isSelected}
      onClick={onSelect}
      variant={"transparent"}
      className="flex h-[52px] w-full flex-row items-center justify-start gap-x-2 px-3 py-2"
    >
      <div className="relative w-[44px]">
        <Image
          src={getTokenIcon(token.iconUrl)}
          height={36}
          width={36}
          className="flex-shrink-0 rounded-lg"
          alt={token.tokenName ?? "chain"}
        />
        <Image
          src={getChainIcon(chain.iconUrl)}
          height={18}
          width={18}
          className="absolute bottom-0 right-0 rounded-[4px]"
          alt={chain.networkName ?? "chain"}
        />
      </div>
      <div className="flex flex-col items-start gap-y-[6px]">
        <span className="truncate text-gray-600 text-sb3">
          {token.tokenName}
        </span>
        <span className="truncate uppercase text-gray-400 text-b3">
          {token.tokenSymbol}
        </span>
      </div>
    </Button>
  );
}
