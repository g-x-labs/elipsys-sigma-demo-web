import { Button } from "@/components/ui";
import { whitelistNetworks } from "@/lib/whitelist";
import Image from "next/image";
import { getNetworkIcon, getTokenIcon } from "@/lib/utils/icons";
import { ModalIds } from "@/enums";
import { useModal } from "@/lib/hooks/common/useModalAtom";
import { NetworkInfo, TokenInfo } from "@/types";
import { Modal, SearchBar } from "@/components/ui";
import { useSelectedAtoms } from "@/lib/hooks/common/useSelectedAtom";

const TokenNetworkSelectorModal: React.FC = () => {
  const { closeModal } = useModal(ModalIds.TokenNetworkSelectorModal);
  // Get the relevant network and token atoms (input or output)
  const {
    selectedNetwork,
    setSelectedNetwork,
    selectedToken,
    setSelectedToken,
  } = useSelectedAtoms(true);

  // Get the list of networks and tokens
  const networkList = Object.values(whitelistNetworks);
  const tokenList = selectedNetwork
    ? Object.values(whitelistNetworks[selectedNetwork].tokens) || []
    : [];

  // Select a network and reset token selection
  const onNetworkSelect = (network: NetworkInfo) => {
    setSelectedNetwork(network.id);
    setSelectedToken(null); // Reset token when network changes
  };

  // Select a token
  const onTokenSelect = (token: TokenInfo) => {
    setSelectedToken(token.address);
    closeModal(); // Close the modal after token selection
  };

  return (
    <Modal modalId={ModalIds.TokenNetworkSelectorModal} title="Select">
      <div className="flex flex-col gap-y-2">
        <SearchBar placeholder="Search for tokens" />
        <div className="flex h-96 w-full border-t border-gray-800">
          <div className="flex w-[172px] flex-col gap-y-3 overflow-y-auto border-r border-gray-800 pr-3">
            <h3 className="pt-4 text-gray-400 text-sb3">Networks</h3>
            <div>
              {networkList.map((network) => (
                <NetworkPill
                  key={network.id}
                  network={network}
                  isSelected={network.id === selectedNetwork}
                  onSelect={() => {
                    onNetworkSelect(network);
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
                  key={token.address}
                  token={token}
                  network={whitelistNetworks[selectedNetwork]}
                  isSelected={token.address === selectedToken}
                  onSelect={() => {
                    onTokenSelect(token);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { TokenNetworkSelectorModal };

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
        src={getNetworkIcon(network.iconUrl)}
        height={32}
        width={32}
        className="flex-shrink-0 rounded-lg"
        alt={network.name ?? "network"}
      />
      <span className="truncate text-gray-400 text-b3">{network.name}</span>
    </Button>
  );
}

// TokenPill component
interface TokenPillProps {
  token: TokenInfo;
  network: NetworkInfo;
  isSelected: boolean;
  onSelect: () => void;
}

function TokenPill(props: TokenPillProps) {
  const { token, network, isSelected, onSelect } = props;

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
          alt={token.name ?? "token"}
        />
        <Image
          src={getNetworkIcon(network.iconUrl)}
          height={18}
          width={18}
          className="absolute bottom-0 right-0 rounded-[4px]"
          alt={network.name ?? "network"}
        />
      </div>
      <div className="flex flex-col items-start gap-y-[6px]">
        <span className="truncate text-gray-600 text-sb3">{token.name}</span>
        <span className="truncate uppercase text-gray-400 text-b3">
          {token.symbol}
        </span>
      </div>
    </Button>
  );
}
