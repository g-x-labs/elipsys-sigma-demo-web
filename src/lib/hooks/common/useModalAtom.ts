import { useAtom } from "jotai";
import { modalAtom } from "@/atoms/modal/modalAtom";

// TODO: Not sure if this can be inside modalAtom.ts
export const useModal = (modalId: string) => {
  const [activeModal, setActiveModal] = useAtom(modalAtom);

  const openModal = () => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);
  const isOpen = activeModal === modalId;

  return { isOpen, openModal, closeModal };
};
