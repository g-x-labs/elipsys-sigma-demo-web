"use client";

import { Address } from "viem";
import { formatAddress } from "@/lib/utils/format";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface UserWalletProps {
  address: Address;
  walletName: string | undefined;
}

export default function UserWallet({ address, walletName }: UserWalletProps) {
  const { openAccountModal } = useAccountModal();
  return (
    <Button
      variant="text"
      size="fit"
      className="flex items-center gap-x-1"
      onClick={openAccountModal}
    >
      <Image
        src={getWalletIcon(walletName)}
        height={16}
        width={16}
        alt={walletName ?? "wallet icon"}
      />
      <div className="text-gray-600 text-sb3 group-hover:text-gray-50">
        {formatAddress(address)}
      </div>
    </Button>
  );
}

function getWalletIcon(name: string | undefined) {
  switch (name) {
    case "MetaMask":
      return "/wallets/metamask.svg";
    case "Rabby Wallet":
      return "/wallets/rabby.svg";
    case "OKX Wallet":
      return "/wallets/okx.svg";
    default:
      return "/wallets/wallet-fallback.svg";
  }
}
