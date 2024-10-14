"use client";

import { Address } from "viem";
import { formatAddress } from "@/lib/utils/formatting/format";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getWalletIcon } from "@/lib/utils/icons/iconUtils";

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
