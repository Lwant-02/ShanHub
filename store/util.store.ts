import { create } from "zustand";

interface UtilStore {
  isCreatePostDialogOpen: boolean;
  setisCreatePostDialogOpen: (isCreatePostDialogOpen: boolean) => void;
}

export const useUtilStore = create<UtilStore>((set) => ({
  isCreatePostDialogOpen: false,
  setisCreatePostDialogOpen: (v: boolean) => set({ isCreatePostDialogOpen: v }),
}));
