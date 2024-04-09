import { create } from "zustand";

interface UserStore {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
  seminarId: number | null;
  setSeminarId: (seminarId: number) => void;
}

const useStore = create<UserStore>((set) => ({
  isSignIn: false,
  setIsSignIn: (isSignIn) => set((store) => ({ ...store, isSignIn })),
  seminarId: null,
  setSeminarId: (seminarId) => set((store) => ({ ...store, seminarId })),
}));

export default useStore;
