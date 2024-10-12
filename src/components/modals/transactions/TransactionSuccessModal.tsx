import TransactionDetail from "@/components/shared/TransactionDetails";
import Modal from "@/components/ui/Modal";
import { ModalIds } from "@/types/modals";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/lib/hooks/useModalAtom";
import { whitelistChains } from "@/const/whitelist";
import { ChainId } from "@/types/utils";
import TokenSummary from "@/components/shared/TokenSummary";

export default function TransactionSuccessModal() {
  // TODO: Remove these
  const tempChain = Object.values(whitelistChains)[0];
  const tempToken = Object.values(whitelistChains[ChainId.Sepolia].tokens)[0];

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  return (
    <Modal
      modalId={ModalIds.TransactionSuccessModal}
      title="Transaction Success"
    >
      <div className="flex w-full flex-col gap-y-5 rounded-lg border border-gray-700 p-4">
        <h2 className="text-gray-400 text-sb3">Transaction # 0x0000...0000</h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={tempToken}
            tokenAmount="0.0001"
            tokenUSDValue="$0.0001"
            chain={tempChain}
            destinationAddress="0x0000...0000"
          />
          <div className="flex h-[40px] flex-row items-center gap-x-1">
            <div className="mx-4 h-full w-[1px] bg-gray-600" />
          </div>
          <TokenSummary
            token={tempToken}
            tokenAmount="0.0001"
            tokenUSDValue="$0.0001"
            chain={tempChain}
            destinationAddress="0x0000...0000"
          />
        </div>

        <TransactionDetail
          label="Network Cost"
          value="--"
          tooltip="Estimated network cost"
        />
        <div className="mx-auto flex w-full items-center justify-center border-t border-gray-600 pb-3 pt-7">
          <Button variant={"link"} size={"fit"}>
            <span className="text-green text-sb2">Wormholescan</span>
          </Button>
        </div>
      </div>
      <Button variant={"action"} size={"medium"} onClick={closeModal}>
        Confirm Transaction
      </Button>
    </Modal>
  );
}
