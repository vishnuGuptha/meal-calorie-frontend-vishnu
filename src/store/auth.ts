"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  firstName?: string;
  lastName?: string;
  email: string;
};

type AuthState = {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      logout: () => {
        set({ token: null, user: null });
        // Clear persisted state so user is fully logged out and no stale data remains
        localStorage.clear();
      }
    }),
    { name: "auth-store" }
  )
);


