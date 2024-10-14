import { TransactionStatus } from "@/enums/transactionStatus";
import { atom } from "jotai";

export const modalAtom = atom<string | null>(null);

// Atom to store transaction status
export const transactionStatusAtom = atom<TransactionStatus | null>(null);

// Atom to store transaction hash (optional for success/failure)
export const transactionHashAtom = atom<string | null>(null);
