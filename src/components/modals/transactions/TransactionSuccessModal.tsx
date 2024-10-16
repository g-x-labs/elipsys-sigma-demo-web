import { ModalIds, SelectionType } from "@/enums";
import { Button } from "@/components/ui";
import { useModal } from "@/lib/hooks/modals/useModalAtom";
import LinkOutIcon from "@/assets/icons/link-out.svg";
import BigNumber from "bignumber.js";
import { Modal } from "@/components/ui";
import { TokenSummary, TransactionDetails } from "@/components/shared";
import { useSelectionAtoms } from "@/lib/hooks/bridge/useSelectionAtoms";
import { getNetworkInfo, getTokenInfo } from "@/lib/networks";
import { useAccount } from "wagmi";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

const TransactionSuccessModal: React.FC = () => {
  // TODO: Remove these
  const tempTokenUsdValue = 1;
  const tempTokenAmount = BigNumber(10000000000000000);

  const { closeModal } = useModal(ModalIds.TransactionSuccessModal);

  const { address } = useAccount();

  const { selectedToken: fromToken, selectedNetwork: fromNetwork } =
    useSelectionAtoms(SelectionType.FROM);

  const { selectedToken: toToken, selectedNetwork: toNetwork } =
    useSelectionAtoms(SelectionType.TO);

  const tokenFrom = getTokenInfo(fromNetwork, fromToken);
  const networkFrom = getNetworkInfo(fromNetwork);

  const tokenTo = getTokenInfo(toNetwork, toToken);
  const networkTo = getNetworkInfo(toNetwork);

  return (
    <Modal
      modalId={ModalIds.TransactionSuccessModal}
      title="Transaction Success"
    >
      <div className="flex w-full flex-col gap-y-5 rounded-lg border border-gray-800 p-4">
        <h2 className="text-gray-400 text-sb3">Transaction # 0x0000...0000</h2>
        <div className="flex w-full flex-col">
          <TokenSummary
            token={tokenFrom}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={networkTo}
            destinationAddress={address}
          />
          <div className="flex h-[40px] flex-row items-center gap-x-1">
            <div className="mx-4 h-full w-[1px] bg-gray-600" />
          </div>
          <TokenSummary
            token={tokenTo}
            tokenAmount={tempTokenAmount}
            tokenUSDValue={tempTokenUsdValue}
            network={networkFrom}
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
