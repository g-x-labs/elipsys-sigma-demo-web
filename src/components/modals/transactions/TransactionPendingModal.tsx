import TokenSummary from "@/components/shared/TokenSummary";
import TransactionDetail from "@/components/shared/TransactionDetails";
import Modal from "@/components/ui/Modal";
import { whitelistChains } from "@/const/whitelist";
import { ModalIds } from "@/types/modals";
import { ChainId } from "@/types/utils";

export default function TransactionPendingModal() {
  // TODO: Remove these
  const tempChain = Object.values(whitelistChains)[0];
  const tempToken = Object.values(whitelistChains[ChainId.Sepolia].tokens)[0];
  const tempTokenUsdValue = 1;

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
            tokenAmount="0.0001"
            tokenUSDValue={tempTokenUsdValue}
            chain={tempChain}
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
            tokenAmount="0.0001"
            tokenUSDValue={tempTokenUsdValue}
            chain={tempChain}
            destinationAddress="0x0000...0000"
          />
        </div>
        <TransactionDetail
          label="Network Cost"
          value="--"
          tooltip="Estimated network cost"
        />
      </div>
    </Modal>
  );
}
