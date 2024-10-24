import { ModalIds, SelectionType } from "@/enums";
import { useBridgeTransactionHandler } from "@/lib/hooks/bridge/useBridgeTransactionHandler";
import BigNumber from "bignumber.js";
import { Button, Modal } from "@/components/ui";
import { TokenSummary, TransactionDetails } from "@/components/shared";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionOverviewModal: React.FC = () => {
  // TODO: Remove these
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { startBridgeTransaction, isPending } = useBridgeTransactionHandler();

  const { address } = useAccount();

  const { token: fromToken, network: fromNetwork } = useTransactionInfo(
    SelectionType.FROM,
  );

  return (
    <Modal
      modalId={ModalIds.TransactionOverviewModal}
      title="Transaction Overview"
    >
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-800 p-4">
        <TokenSummary
          token={fromToken}
          tokenAmount={tempTokenAmount}
          tokenUSDValue={tempTokenUsdValue}
          network={fromNetwork}
          destinationAddress={address}
        />
        <TransactionDetails
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
        <span className="uppercase text-sb3">
          {isPending ? "Loading" : "Confirm Transaction"}
        </span>
      </Button>
    </Modal>
  );
};

export { TransactionOverviewModal };
