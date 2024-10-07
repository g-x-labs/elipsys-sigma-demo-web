import { useAtom } from "jotai";
import { modalAtom } from "@/atoms/modalAtom";

export const useModal = (modalId: string) => {
  const [activeModal, setActiveModal] = useAtom(modalAtom);

  const openModal = () => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);
  const isOpen = activeModal === modalId;

  return { isOpen, openModal, closeModal };
};
