"use client";

import { useAccount } from "wagmi";
import UserWallet from "./UserWallet";
import { ConnectWalletButton } from "./ConnectWalletButton";

export default function WalletConnectSection() {
  const { isConnected, address, connector } = useAccount();
  if (isConnected && address) {
    return <UserWallet address={address} walletIcon={connector?.icon} />;
  }
  return <ConnectWalletButton />;
}
