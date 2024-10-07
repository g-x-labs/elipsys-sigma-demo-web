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
            variant="text"
            size="small"
            className={
              !ready ? "pointer-events-none cursor-default opacity-0" : ""
            }
            aria-hidden={!ready}
            onClick={openConnectModal}
          >
            <span className="text-gray-600 text-sb3 group-hover:text-gray-50">
              Connect
            </span>
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
};
