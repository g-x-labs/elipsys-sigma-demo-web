import { useModal } from "@/lib/hooks/modals/useModalAtom";
import { ModalIds, SelectionType } from "@/enums";
import BigNumber from "bignumber.js";
import { Button, Modal } from "@/components/ui";
import { TokenSummary, TransactionDetails } from "@/components/shared";
import { useSelectionAtoms } from "@/lib/hooks/bridge/useSelectionAtoms";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { useAccount } from "wagmi";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// TODO: Confirm what this is suppose to display
const TransactionFailModal: React.FC = () => {
  // TODO: Remove these
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  const { address } = useAccount();

  const { selectedToken, selectedNetwork } = useSelectionAtoms(
    SelectionType.FROM,
  );

  const token = getTokenInfo(selectedNetwork, selectedToken);
  const network = getNetworkInfo(selectedNetwork);

  return (
    <Modal modalId={ModalIds.TransactionFailModal} title="Transaction Fail">
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-700 p-4">
        <TokenSummary
          token={token}
          tokenAmount={tempTokenAmount}
          tokenUSDValue={tempTokenUsdValue}
          network={network}
          destinationAddress={address}
        />
        <TransactionDetails
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
};

export { TransactionFailModal };
