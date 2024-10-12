import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";
import { Button } from "@/components/ui/Button";
import { useBridgeTransactionHandler } from "@/lib/hooks/useBridgeTransactionHandler";
import TransactionDetail from "@/components/shared/TransactionDetails";
import { whitelistChains } from "@/const/whitelist";
import { ChainId } from "@/types/utils";
import TokenSummary from "@/components/shared/TokenSummary";

export default function TransactionOverviewModal() {
  // TODO: Remove these
  const tempChain = Object.values(whitelistChains)[0];
  const tempToken = Object.values(whitelistChains[ChainId.Sepolia].tokens)[0];
  const tempTokenUsdValue = 1;

  const { startBridgeTransaction } = useBridgeTransactionHandler();

  return (
    <Modal
      modalId={ModalIds.TransactionOverviewModal}
      title="Transaction Overview"
    >
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-800 p-4">
        <TokenSummary
          token={tempToken}
          tokenAmount="0.0001"
          tokenUSDValue={tempTokenUsdValue}
          chain={tempChain}
          destinationAddress="0x0000...0000"
        />
        <TransactionDetail
          label="Network Cost"
          value="--"
          tooltip="Estimated network cost"
        />
      </div>
      <Button
        variant={"action"}
        size={"medium"}
        onClick={startBridgeTransaction}
      >
        <span className="uppercase text-sb3">Confirm Transaction</span>
      </Button>
    </Modal>
  );
}
