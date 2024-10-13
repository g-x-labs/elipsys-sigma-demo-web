import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";
import { Button } from "@/components/ui/Button";
import { useBridgeTransactionHandler } from "@/lib/hooks/useBridgeTransactionHandler";
import TransactionDetail from "@/components/shared/TransactionDetails";
import { whitelistNetworks } from "@/const/whitelist";
import { NetworkId } from "@/types/utils";
import TokenSummary from "@/components/shared/TokenSummary";

export default function TransactionOverviewModal() {
  // TODO: Remove these
  const tempNetwork = Object.values(whitelistNetworks)[0];
  const tempToken = Object.values(
    whitelistNetworks[NetworkId.Sepolia].tokens,
  )[0];
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
          network={tempNetwork}
          destinationAddress="0x0000...0000"
        />
        <TransactionDetail
          label="Network Cost"
          value={null}
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
