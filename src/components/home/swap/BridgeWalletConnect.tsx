"use client";
import { ConnectWalletButton } from "@/components/wallet/ConnectWalletButton";
import UserWallet from "@/components/wallet/UserWallet";
import { useAccount } from "wagmi";

export default function BridgeWalletConnect() {
  const { isConnected, address, connector } = useAccount();
  if (isConnected && address) {
    return (
      <div className="flex h-4 w-full items-center justify-start">
        <UserWallet address={address} walletName={connector?.name} />
      </div>
    );
  }

  return (
    <div className="flex h-4 w-full items-center justify-between">
      <div className="flex items-center gap-x-2">
        <span className="h-4 w-4 rounded-sm bg-black-700" />
        <span className="text-gray-600 text-sb3">-</span>
      </div>
      <ConnectWalletButton />
    </div>
  );
}
