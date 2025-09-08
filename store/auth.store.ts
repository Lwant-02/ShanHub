import { create } from "zustand";

interface AuthStore {
  isLoginDialogOpen: boolean;
  setIsLoginDialogOpen: (isLoginDialogOpen: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginDialogOpen: false,
  setIsLoginDialogOpen: (v: boolean) => set({ isLoginDialogOpen: v }),
}));
