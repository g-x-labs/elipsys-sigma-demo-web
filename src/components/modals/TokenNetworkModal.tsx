import Modal from "@/components/ui/Modal";
import { Button } from "../ui/Button";
import { useAtom } from "jotai";
import {
  selectedNetworkAtom,
  selectedTokenAtom,
} from "@/atoms/tokenNetworkAtom";

// Mocked data for networks and tokens
const networks = [
  { id: "arb", name: "Arbitrum" },
  { id: "op", name: "Optimism" },
];

const tokensByNetwork: { [key: string]: { token: string; ticker: string }[] } =
  {
    arb: [
      { token: "Arbitrum Token A", ticker: "ATA" },
      { token: "Arbitrum Token B", ticker: "ATB" },
    ],
    op: [
      { token: "Optimism Token X", ticker: "OTX" },
      { token: "Optimism Token Y", ticker: "OTY" },
    ],
  };

export default function TokenNetworkModal() {
  const [selectedNetwork, setSelectedNetwork] = useAtom(selectedNetworkAtom);
  const [selectedToken, setSelectedToken] = useAtom(selectedTokenAtom);

  const tokenList = selectedNetwork ? tokensByNetwork[selectedNetwork] : [];

  return (
    <Modal modalId="tokenNetworkModal" title="Select">
      {/* TODO: Add search bar */}
      <div className="flex h-96 w-full gap-3 border-t border-gray-800 pb-4">
        <div className="flex w-[172px] flex-col gap-y-3 overflow-y-auto border-r border-gray-800 pr-3">
          <h3 className="pt-4 text-gray-400 text-sb3">Networks</h3>
          <div>
            {networks.map((network) => (
              <ChainPill
                key={network.id}
                chain={network.name}
                isSelected={network.id === selectedNetwork}
                onSelect={() => {
                  setSelectedNetwork(network.id);
                  setSelectedToken(null);
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex w-[252px] flex-col gap-y-3 overflow-y-auto pr-3">
          <h3 className="pt-4 text-gray-400 text-sb3">Tokens</h3>
          <div>
            {tokenList.map((token) => (
              <TokenPill
                key={token.ticker}
                token={token.token}
                ticker={token.ticker}
                isSelected={token.token === selectedToken}
                onSelect={() => setSelectedToken(token.token)}
              />
            ))}
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
      <span className="text-gray-400 text-b3">{chain}</span>
    </Button>
  );
}

// TokenPill component
interface TokenPillProps {
  token: string;
  ticker: string;
  isSelected: boolean;
  onSelect: () => void;
}

function TokenPill(props: TokenPillProps) {
  const { token, ticker, isSelected, onSelect } = props;

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
        <span className="text-gray-600 text-sb3">{token}</span>
        <span className="uppercase text-gray-400 text-b3">{ticker}</span>
      </div>
    </Button>
  );
}
