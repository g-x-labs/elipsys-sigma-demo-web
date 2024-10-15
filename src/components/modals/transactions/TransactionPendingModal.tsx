import { TokenSummary, TransactionDetails } from "@/components/shared";
import { Modal } from "@/components/ui";
import { whitelistNetworks } from "@/const/whitelist";
import { ModalIds, NetworkId } from "@/enums";
import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionPendingModal: React.FC = () => {
  // TODO: Remove these
  const tempNetwork = Object.values(whitelistNetworks)[0];
  const tempToken = Object.values(
    whitelistNetworks[NetworkId.Sepolia].tokens,
  )[0];
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

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
            token={tempToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={tempNetwork}
            destinationAddress="0x0000...0000"
          />
          <div className="flex h-[60px] flex-row items-center gap-x-1">
            <div className="mx-4 h-full w-[1px] bg-gray-600" />
            <span className="text-gray-400 text-sb3">
              Wormhole (ZK-Threshold)
            </span>
          </div>
          <TokenSummary
            token={tempToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={tempNetwork}
            destinationAddress="0x0000...0000"
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
