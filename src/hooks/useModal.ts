import { create } from "zustand";

export type ModalType =
  | "signIn"
  | "registerOne"
  | "nextPassword"
  | "registerTwo"
  | "registerThree";

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));
