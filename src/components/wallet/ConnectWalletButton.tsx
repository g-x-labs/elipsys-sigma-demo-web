"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/Button";
export const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({ openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== "loading";
        return (
          <Button
            className={
              !ready ? "pointer-events-none cursor-default opacity-0" : ""
            }
            aria-hidden={!ready}
            onClick={openConnectModal}
          >
            Connect Wallet
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
};
