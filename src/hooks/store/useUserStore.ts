import { create } from "zustand";

interface UserStore {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  isSignIn: false,
  setIsSignIn: (isSignIn) => set(() => ({ isSignIn })),
}));

export default useUserStore;
