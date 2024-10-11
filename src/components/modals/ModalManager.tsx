"use client";

import React from "react";
import TokenNetworkModal from "@/components/modals/TokenNetworkModal";
import TransactionOverviewModal from "@/components/modals/TransactionOverviewModal";
import TransactionSuccessModal from "@/components/modals/TransactionSuccessModal";
import TransactionFailModal from "@/components/modals/TransactionFailModal";

const ModalManager: React.FC = () => {
  return (
    <>
      <TokenNetworkModal />
      <TransactionOverviewModal />
      <TransactionSuccessModal />
      <TransactionFailModal />
    </>
  );
};

export default ModalManager;
