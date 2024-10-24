"use client";

import { useModal } from "@/lib/hooks/modals/useModalAtom";
import { ModalIds, SelectionType } from "@/enums";
import BigNumber from "bignumber.js";
import { Button, Modal } from "@/components/ui";
import { TokenSummary } from "@/components/shared";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge";
import { useAtomValue } from "jotai";
import { tokenInputAtom, usdValueAtom } from "@/atoms/bridge/inputAtom";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionFailModal: React.FC = () => {
  const tokenAmount = useAtomValue(tokenInputAtom);
  const tokenUsdValue = useAtomValue(usdValueAtom);

  const { closeModal } = useModal(ModalIds.TransactionFailModal);

  const { address } = useAccount();

  const { token: fromToken, network: fromNetwork } = useTransactionInfo(
    SelectionType.FROM,
  );

  return (
    <Modal modalId={ModalIds.TransactionFailModal} title="Transaction Fail">
      <div className="flex w-full flex-col gap-y-3 rounded-lg border border-gray-700 p-4">
        <TokenSummary
          token={fromToken}
          tokenAmount={BigNumber(tokenAmount)}
          tokenUSDValue={tokenUsdValue}
          network={fromNetwork}
          destinationAddress={address}
        />
      </div>
      <Button variant={"action"} size={"medium"} onClick={closeModal}>
        <span className="uppercase text-sb3">Start a new transaction</span>
      </Button>
    </Modal>
  );
};

export { TransactionFailModal };
