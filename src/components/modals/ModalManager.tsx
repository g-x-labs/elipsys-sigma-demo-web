"use client";

import React from "react";
import { TokenNetworkSelectorModal } from "@/components/modals/tokenNetworkSelector";
import {
  TransactionOverviewModal,
  TransactionPendingModal,
  TransactionSuccessModal,
  TransactionFailModal,
} from "@/components/modals/transactions";
import { useAtomValue } from "jotai";
import { modalAtom } from "@/atoms/modal/modalAtom";
import { ModalIds } from "@/enums";

const modalComponents: Record<ModalIds, React.FC> = {
  [ModalIds.TokenNetworkSelectorModal]: TokenNetworkSelectorModal,
  [ModalIds.TransactionOverviewModal]: TransactionOverviewModal,
  [ModalIds.TransactionPendingModal]: TransactionPendingModal,
  [ModalIds.TransactionSuccessModal]: TransactionSuccessModal,
  [ModalIds.TransactionFailModal]: TransactionFailModal,
};

const ModalManager: React.FC = () => {
  const activeModal = useAtomValue(modalAtom);

  const ModalComponent = activeModal
    ? modalComponents[activeModal as ModalIds]
    : null;

  return <>{ModalComponent && <ModalComponent />}</>;
};

export { ModalManager };
