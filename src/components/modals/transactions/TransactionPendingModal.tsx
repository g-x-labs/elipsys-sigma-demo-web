import { TokenSummary, TransactionDetails } from "@/components/shared";
import { Modal } from "@/components/ui";
import { ModalIds, SelectionType } from "@/enums";
import BigNumber from "bignumber.js";
import { useSelectionAtoms } from "@/lib/hooks/bridge/useSelectionAtoms";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { useAccount } from "wagmi";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionPendingModal: React.FC = () => {
  // TODO: Remove these
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { address } = useAccount();

  const { selectedToken: fromToken, selectedNetwork: fromNetwork } =
    useSelectionAtoms(SelectionType.FROM);

  const { selectedToken: toToken, selectedNetwork: toNetwork } =
    useSelectionAtoms(SelectionType.TO);

  const tokenFrom = getTokenInfo(fromNetwork, fromToken);
  const networkFrom = getNetworkInfo(fromNetwork);

  const tokenTo = getTokenInfo(toNetwork, toToken);
  const networkTo = getNetworkInfo(toNetwork);

  return (
    <Modal
      modalId={ModalIds.TransactionPendingModal}
      title="Transaction Pending"
    >
      {/* TODO: Spinner animation */}
      <div className="flex w-full flex-col gap-y-5 rounded-lg border border-gray-800 p-4">
        <h2 className="text-gray-400 text-sb3">Entering the Portal</h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={tokenFrom}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={networkTo}
            destinationAddress={address}
          />
          <div className="flex h-[60px] flex-row items-center gap-x-1">
            <div className="mx-4 h-full w-[1px] bg-gray-600" />
            <span className="text-gray-400 text-sb3">
              Wormhole (ZK-Threshold)
            </span>
          </div>
          <TokenSummary
            token={tokenTo}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={networkFrom}
            destinationAddress={address}
          />
        </div>
        <TransactionDetails
          label="Network Cost"
          value={null}
          tooltip="Estimated network cost"
        />
      </div>
    </Modal>
  );
};

export { TransactionPendingModal };
