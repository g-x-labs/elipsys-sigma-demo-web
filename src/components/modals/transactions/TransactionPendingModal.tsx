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

  const { token: fromToken, network: fromNetwork } = useTransactionInfo(
    SelectionType.FROM,
  );
  const { token: toToken, network: toNetwork } = useTransactionInfo(
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
            token={fromToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={fromNetwork}
            destinationAddress={address}
          />
          <TransactionDivider label="Wormhole (ZK-Threshold)" height="60px" />
          <TokenSummary
            token={toToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={toNetwork}
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
