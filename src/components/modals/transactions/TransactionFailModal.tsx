import TokenSummary from "@/components/shared/TokenSummary";
import TransactionDetail from "@/components/shared/TransactionDetails";
import { Button } from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { whitelistNetworks } from "@/const/whitelist";
import { useModal } from "@/lib/hooks/common/useModalAtom";
import { ModalIds, NetworkId } from "@/enums";
import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: Confirm what this is suppose to display
export default function TransactionFailModal() {
  // TODO: Remove these
  const tempNetwork = Object.values(whitelistNetworks)[0];
  const tempToken = Object.values(
    whitelistNetworks[NetworkId.Sepolia].tokens,
  )[0];
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  return (
    <Modal modalId={ModalIds.TransactionFailModal} title="Transaction Fail">
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-700 p-4">
        <TokenSummary
          token={tempToken}
          tokenAmount={tempTokenAmount}
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
      <Button variant={"action"} size={"medium"} onClick={closeModal}>
        <span className="uppercase text-sb3">Start a new transaction</span>
      </Button>
    </Modal>
  );
}
