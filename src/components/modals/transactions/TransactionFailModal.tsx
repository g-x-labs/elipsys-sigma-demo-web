import TokenSummary from "@/components/shared/TokenSummary";
import TransactionDetail from "@/components/shared/TransactionDetails";
import Modal from "@/components/ui/Modal";
import { whitelistChains } from "@/const/whitelist";
import { ModalIds } from "@/types/modals";
import { ChainId } from "@/types/utils";

export default function TransactionFailModal() {
  // TODO: Remove these
  const tempChain = Object.values(whitelistChains)[0];
  const tempToken = Object.values(whitelistChains[ChainId.Sepolia].tokens)[0];

  return (
    <Modal modalId={ModalIds.TransactionFailModal} title="Transaction Fail">
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-700 p-4">
        <TokenSummary
          token={tempToken}
          tokenAmount="0.0001"
          tokenUSDValue="$0.0001"
          chain={tempChain}
          destinationAddress="0x0000...0000"
        />
        <TransactionDetail
          label="Network Cost"
          value="--"
          tooltip="Estimated network cost"
        />
      </div>
    </Modal>
  );
}
