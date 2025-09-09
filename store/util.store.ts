import { create } from "zustand";

interface UtilStore {
  isLanguageDropdownOpen: boolean;
  setIsLanguageDropdownOpen: (isLanguageDropdownOpen: boolean) => void;
}

export const useUtilStore = create<UtilStore>((set) => ({
  isLanguageDropdownOpen: false,
  setIsLanguageDropdownOpen: (v: boolean) => set({ isLanguageDropdownOpen: v }),
}));
