import { atom } from "jotai";

// Atom to hold the ID of the currently active modal, or null if none is open
export const modalAtom = atom<string | null>(null);
