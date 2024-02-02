import { create } from "zustand";

export interface NavMenuStoreProps {
  showMenu: boolean,
  setShowMenu: (value: any) => void;
}

export const useNavMenuStore = create<NavMenuStoreProps>((set) => ({
  showMenu: false,
  setShowMenu: (value) => typeof value === "boolean" && set(() => ({ showMenu: value }))
}));