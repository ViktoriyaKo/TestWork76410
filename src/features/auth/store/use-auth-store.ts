import { create } from 'zustand';
import { UserType } from '@/entities/user';
import { deleteTokens } from '@/shared/api/updateTokens';
import { getUserInfo } from '@/features/auth/api/login';

type AuthState = {
  isAuthorized: boolean | null;
  setAuthorized: (loggedIn: boolean) => void;

  user: UserType | null;
  setUser: (user: UserType | null) => void;
  logout: () => void;
  fetchUserInfo: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),

  isAuthorized: null,
  setAuthorized: (isAuthorized) => set({ isAuthorized }),
  logout: () => {
    set({ user: null, isAuthorized: false });
    deleteTokens();
  },

  fetchUserInfo: async () => {
    if (get().user) return;
    try {
      const user = await getUserInfo();
      set({ user, isAuthorized: true });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      set({ user: null, isAuthorized: false });
    }
  },
}));
