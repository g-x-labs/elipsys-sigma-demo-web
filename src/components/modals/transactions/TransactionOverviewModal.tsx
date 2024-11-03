"use client";

import { ModalIds, SelectionType } from "@/enums";
import { useBridgeTransactionHandler } from "@/lib/hooks/bridge/useBridgeTransactionHandler";
import BigNumber from "bignumber.js";
import { Button, Modal } from "@/components/ui";
import { TokenSummary } from "@/components/shared";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge";
import { useAtomValue } from "jotai";
import { tokenInputAtom, usdValueAtom } from "@/atoms/bridge/inputAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionOverviewModal: React.FC = () => {
  const tokenAmount = useAtomValue(tokenInputAtom);
  const tokenUsdValue = useAtomValue(usdValueAtom);

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
          tokenAmount={BigNumber(tokenAmount)}
          tokenUSDValue={tokenUsdValue}
          network={fromNetwork}
          destinationAddress={address}
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
