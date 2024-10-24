import {
  PerpetualCircularLoader,
  TokenSummary,
  TransactionDivider,
} from "@/components/shared";
import { Modal } from "@/components/ui";
import { ModalIds, SelectionType } from "@/enums";
import BigNumber from "bignumber.js";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge";
import { useAtomValue } from "jotai";
import {
  outputTokenAmountAtom,
  tokenInputAtom,
  usdValueAtom,
} from "@/atoms/bridge/inputAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionPendingModal: React.FC = () => {
  // TODO: Consider moving in to useTransactionInfo
  const fromTokenAmount = useAtomValue(tokenInputAtom);
  const toTokenAmount = useAtomValue(outputTokenAmountAtom);
  const tokenUsdValue = useAtomValue(usdValueAtom);

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
      <div className="flex items-center justify-center py-1">
        <PerpetualCircularLoader /> {/* Pass duration as needed */}
      </div>
      <div className="flex w-full flex-col gap-y-5 rounded-lg border border-gray-800 p-4">
        <h2 className="text-gray-400 text-sb3">Entering the Portal</h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={fromToken}
            tokenAmount={BigNumber(fromTokenAmount)}
            tokenUSDValue={tokenUsdValue}
            network={fromNetwork}
            destinationAddress={address}
          />
          <TransactionDivider
            label="Wormhole (ZK-Threshold)"
            className="h-[60px]"
          />
          <TokenSummary
            token={toToken}
            tokenAmount={toTokenAmount ?? BigNumber(0)}
            tokenUSDValue={tokenUsdValue}
            network={toNetwork}
            destinationAddress={address}
          />
        </div>
      </div>
    </Modal>
  );
};

export { TransactionPendingModal };
