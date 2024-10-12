"use client";

import React from "react";
import TokenNetworkModal from "@/components/modals/tokenNetwork/TokenNetworkModal";
import TransactionOverviewModal from "@/components/modals/transactions/TransactionOverviewModal";
import TransactionPendingModal from "@/components/modals/transactions/TransactionPendingModal";
import TransactionSuccessModal from "@/components/modals/transactions/TransactionSuccessModal";
import TransactionFailModal from "@/components/modals/transactions/TransactionFailModal";

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

export default ModalManager;
