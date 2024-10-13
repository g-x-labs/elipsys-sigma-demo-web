import TransactionDetail from "@/components/shared/TransactionDetails";
import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/lib/hooks/useModalAtom";
import { whitelistNetworks } from "@/const/whitelist";
import { NetworkId } from "@/types/utils";
import TokenSummary from "@/components/shared/TokenSummary";
import LinkOutIcon from "@/assets/icons/link-out.svg";

export default function TransactionSuccessModal() {
  // TODO: Remove these
  const tempNetwork = Object.values(whitelistNetworks)[0];
  const tempToken = Object.values(
    whitelistNetworks[NetworkId.Sepolia].tokens,
  )[0];
  const tempTokenUsdValue = 1;

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  return (
    <Modal
      modalId={ModalIds.TransactionSuccessModal}
      title="Transaction Success"
    >
      <div className="flex w-full flex-col gap-y-5 rounded-lg border border-gray-800 p-4">
        <h2 className="text-gray-400 text-sb3">Transaction # 0x0000...0000</h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={tempToken}
            tokenAmount="0.0001"
            tokenUSDValue={tempTokenUsdValue}
            network={tempNetwork}
            destinationAddress="0x0000...0000"
          />
          <div className="flex h-[40px] flex-row items-center gap-x-1">
            <div className="mx-4 h-full w-[1px] bg-gray-600" />
          </div>
          <TokenSummary
            token={tempToken}
            tokenAmount="0.0001"
            tokenUSDValue={tempTokenUsdValue}
            network={tempNetwork}
            destinationAddress="0x0000...0000"
          />
        </div>
        <TransactionDetail
          label="Network Cost"
          value="--"
          tooltip="Estimated network cost"
        />
        <div className="mx-auto flex w-full items-center justify-center border-t border-gray-600 pb-3 pt-7">
          {/* TODO: Fix group hover */}
          <Button variant={"link"} size={"fit"} className="gap-x-1">
            <span className="text-green text-sb2">Wormholescan</span>{" "}
            <LinkOutIcon className="w-3 stroke-green" />
          </Button>
        </div>
      </div>
      <Button variant={"action"} size={"medium"} onClick={closeModal}>
        <span className="uppercase text-sb3">Start a new transaction</span>
      </Button>
    </Modal>
  );
}
