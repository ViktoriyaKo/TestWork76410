import { create } from 'zustand';
import { UserType } from '@/entities/user';
import { deleteTokens } from '@/shared/api/updateTokens';

type AuthState = {
  isAuthorized: boolean | null;
  setAuthorized: (loggedIn: boolean) => void;

  user: UserType | null;
  setUser: (user: UserType | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),

  isAuthorized: null,
  setAuthorized: (isAuthorized) => set({ isAuthorized }),
  logout: () => {
    set({ user: null, isAuthorized: false });
    deleteTokens();
  },
}));
