import { ModalIds, SelectionType } from "@/enums";
import { Button } from "@/components/ui";
import { useModal } from "@/lib/hooks/modals/useModalAtom";
import LinkOutIcon from "@/assets/icons/link-out.svg";
import BigNumber from "bignumber.js";
import { Modal } from "@/components/ui";
import {
  TokenSummary,
  TransactionDetails,
  TransactionDivider,
} from "@/components/shared";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge/useTransactionInfo";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionSuccessModal: React.FC = () => {
  // TODO: Remove these
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  const { address } = useAccount();

  const { token: fromToken, network: fromNetwork } = useTransactionInfo(
    SelectionType.FROM,
  );

  const { token: toToken, network: toNetwork } = useTransactionInfo(
    SelectionType.TO,
  );

  return (
    <Modal
      modalId={ModalIds.TransactionSuccessModal}
      title="Transaction Success"
    >
      <div className="flex w-full flex-col gap-y-5 rounded-lg border border-gray-800 p-4">
        <h2 className="text-gray-400 text-sb3">Transaction # 0x0000...0000</h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={fromToken}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={fromNetwork}
            destinationAddress={address}
          />
          <TransactionDivider />
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
};

export { TransactionSuccessModal };
