import {
  TokenSummary,
  TransactionDetails,
  TransactionDivider,
} from "@/components/shared";
import { Modal } from "@/components/ui";
import { ModalIds, SelectionType } from "@/enums";
import BigNumber from "bignumber.js";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge/useTransactionInfo";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionPendingModal: React.FC = () => {
  // TODO: Remove these
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { address } = useAccount();

  const { token: inputToken, network: inputNetwork } = useTransactionInfo(
    SelectionType.FROM,
  );

  const { token: outputToken, network: outputNetwork } = useTransactionInfo(
    SelectionType.TO,
  );

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
            token={inputToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={inputNetwork}
            destinationAddress={address}
          />
          <TransactionDivider label="Wormhole (ZK-Threshold)" height="60px" />
          <TokenSummary
            token={outputToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={outputNetwork}
            destinationAddress={address}
          />
        </div>
        <TransactionDetails
          label="Network Cost"
          value={null}
          tooltip="Estimated network cost"
        />
      </div>
    </Modal>
  );
};

export { TransactionPendingModal };
