"use client";

import { Address } from "viem";
import Image from "next/image";
import { formatAddress } from "@/lib/utils/format";

interface UserWalletProps {
  address: Address;
  walletIcon: string | undefined;
}

export default function UserWallet({ address, walletIcon }: UserWalletProps) {
  return (
    <button className="flex items-center gap-x-2">
      <Image
        alt={"wallet icon"}
        height={20}
        width={20}
        src={walletIcon ?? ""} //TODO: add default icon
      />
      <div>{formatAddress(address)}</div>
    </button>
  );
}
