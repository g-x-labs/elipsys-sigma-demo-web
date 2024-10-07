"use client";

import { Address } from "viem";
import { formatAddress } from "@/lib/utils/format";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";

interface UserWalletProps {
  address: Address;
  walletName: string | undefined;
}

export default function UserWallet({ address, walletName }: UserWalletProps) {
  const { openAccountModal } = useAccountModal();
  return (
    <button className="flex items-center gap-x-2" onClick={openAccountModal}>
      <Image
        src={getWalletIcon(walletName)}
        height={20}
        width={20}
        alt={walletName ?? "wallet icon"}
      />
      <div>{formatAddress(address)}</div>
    </button>
  );
}

function getWalletIcon(name: string | undefined) {
  switch (name) {
    case "MetaMask":
      return "/wallet/metamask.svg";
    case "Rabby Wallet":
      return "/wallet/rabby.svg";
    default:
      return ""; // TODO: Add more wallet icons, and default icon for unknown wallets
  }
}
