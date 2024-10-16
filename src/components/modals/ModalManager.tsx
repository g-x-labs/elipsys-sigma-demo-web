"use client";

import React from "react";
import { TokenNetworkSelectorModal } from "@/components/modals/tokenNetworkSelector";
import {
  TransactionOverviewModal,
  TransactionPendingModal,
  TransactionSuccessModal,
  TransactionFailModal,
} from "@/components/modals/transactions";

const ModalManager: React.FC = () => {
  return (
    <>
      <TokenNetworkSelectorModal />
      <TransactionOverviewModal />
      <TransactionPendingModal />
      <TransactionSuccessModal />
      <TransactionFailModal />
    </>
  );
};

export { ModalManager };
