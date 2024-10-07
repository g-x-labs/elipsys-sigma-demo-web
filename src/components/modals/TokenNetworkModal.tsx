import Modal from "@/components/ui/Modal";

export default function TokenNetworkModal() {
  return (
    <Modal modalId="tokenNetworkModal" title="Select">
      {/* TODO: Add search bar */}
      <div className="flex h-96 w-full gap-3 border-t border-gray-800 pb-4">
        <div className="flex w-[172px] flex-col gap-y-3 overflow-y-auto border-r border-gray-800">
          <h3 className="pt-4 text-gray-400 text-sb3">Networks</h3>
          <div>
            {Array.from({ length: 10 }).map((_, index) => (
              <ChainPill key={index} chain="temp" />
            ))}
          </div>
        </div>
        <div className="flex w-[252px] flex-col gap-y-3 overflow-y-auto">
          <h3 className="pt-4 text-gray-400 text-sb3">Tokens</h3>
          <div>
            {Array.from({ length: 10 }).map((_, index) => (
              <TokenPill key={index} token="temp" ticker="temp" />
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
}

function ChainPill(props: ChainPillProps) {
  const { chain } = props;

  return (
    <div className="flex w-full flex-row items-center justify-start gap-x-2 px-3 py-2">
      <div className="h-8 w-8 rounded-lg bg-gray-700"></div>
      <span className="text-gray-400 text-b3">{chain}</span>
    </div>
  );
}

// TokenPill component
interface TokenPillProps {
  token: string;
  ticker: string;
}

function TokenPill(props: TokenPillProps) {
  const { token, ticker } = props;

  return (
    <div className="flex w-full flex-row items-center justify-start gap-x-2 px-3 py-2">
      <div className="relative w-[44px]">
        <div className="h-9 w-9 rounded-full bg-gray-700"></div>

        <div className="absolute bottom-0 right-0 h-[18px] w-[18px] rounded-sm bg-gray-600"></div>
      </div>
      <div className="flex flex-col gap-y-[6px]">
        <span className="text-gray-600 text-sb3">{token}</span>
        <span className="uppercase text-gray-400 text-b3">{ticker}</span>
      </div>
    </div>
  );
}
