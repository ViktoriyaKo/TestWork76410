import { create } from 'zustand';
import { UserType } from '@/entities/user/types/types';

type UserStore = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: { email: 'MOCK_EMAIL' },
  setUser: (user) => set({ user }),
}));
