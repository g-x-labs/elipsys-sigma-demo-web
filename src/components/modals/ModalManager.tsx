"use client";

import React from "react";
import { TokenNetworkModal } from "@/components/modals/tokenNetwork";
import {
  TransactionOverviewModal,
  TransactionPendingModal,
  TransactionSuccessModal,
  TransactionFailModal,
} from "@/components/modals/transactions";

const ModalManager: React.FC = () => {
  return (
    <>
      <TokenNetworkModal />
      <TransactionOverviewModal />
      <TransactionPendingModal />
      <TransactionSuccessModal />
      <TransactionFailModal />
    </>
  );
};

export { ModalManager };
