import { ModalIds, SelectionType } from "@/enums";
import { Button } from "@/components/ui";
import { useModal } from "@/lib/hooks/modals/useModalAtom";
import LinkOutIcon from "@/assets/icons/link-out.svg";
import BigNumber from "bignumber.js";
import { Modal } from "@/components/ui";
import { TokenSummary, TransactionDivider } from "@/components/shared";
import { useAccount } from "wagmi";
import { useTransactionInfo } from "@/lib/hooks/bridge";
import { useAtomValue } from "jotai";
import {
  outputTokenAmountAtom,
  tokenInputAtom,
  usdValueAtom,
} from "@/atoms/bridge/inputAtom";
import { transactionHashAtom } from "@/atoms/modal/modalAtom";
import { formatAddress } from "@/lib/utils/formats";
import Link from "next/link";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionSuccessModal: React.FC = () => {
  // TODO: Remove these
  const fromTokenAmount = useAtomValue(tokenInputAtom);
  const toTokenAmount = useAtomValue(outputTokenAmountAtom);
  const tokenUsdValue = useAtomValue(usdValueAtom);
  const txnHash = useAtomValue(transactionHashAtom);

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
        <h2 className="text-gray-400 text-sb3">
          Transaction # {formatAddress(txnHash ?? "0x0000000000000")}
        </h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={fromToken}
            tokenAmount={BigNumber(fromTokenAmount)}
            tokenUSDValue={tokenUsdValue}
            network={fromNetwork}
            destinationAddress={address}
          />
          <TransactionDivider className="h-[40px]" />
          <TokenSummary
            token={toToken}
            tokenAmount={toTokenAmount ?? BigNumber(0)}
            tokenUSDValue={tokenUsdValue}
            network={toNetwork}
            destinationAddress={address}
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center border-t border-gray-600 pb-3 pt-7">
          {/* TODO: Fix group hover */}
          <Button variant={"link"} size={"fit"} className="gap-x-1">
            <Link
              prefetch={false}
              target="_blank"
              href={`https://testnet.bscscan.com/search?q=${txnHash}`}
            >
              BSC Scanner
            </Link>
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
