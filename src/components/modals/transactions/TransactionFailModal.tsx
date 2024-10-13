import TokenSummary from "@/components/shared/TokenSummary";
import TransactionDetail from "@/components/shared/TransactionDetails";
import { Button } from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { whitelistNetworks } from "@/const/whitelist";
import { useModal } from "@/lib/hooks/useModalAtom";
import { ModalIds } from "@/types/modals";
import { NetworkId } from "@/types/utils";

// TODO: Confirm what this is suppose to display
export default function TransactionFailModal() {
  // TODO: Remove these
  const tempNetwork = Object.values(whitelistNetworks)[0];
  const tempToken = Object.values(
    whitelistNetworks[NetworkId.Sepolia].tokens,
  )[0];
  const tempTokenUsdValue = 1;

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  return (
    <Modal modalId={ModalIds.TransactionFailModal} title="Transaction Fail">
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-700 p-4">
        <TokenSummary
          token={tempToken}
          tokenAmount="0.0001"
          tokenUSDValue={tempTokenUsdValue}
          network={tempNetwork}
          destinationAddress="0x0000...0000"
        />
        <TransactionDetail
          label="Network Cost"
          value="--"
          tooltip="Estimated network cost"
        />
      </div>
      <Button variant={"action"} size={"medium"} onClick={closeModal}>
        <span className="uppercase text-sb3">Start a new transaction</span>
      </Button>
    </Modal>
  );
}
