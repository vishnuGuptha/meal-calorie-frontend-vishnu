"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CalorieResult = {
  dish_name: string;
  servings: number;
  calories_per_serving: number;
  total_calories: number;
  source?: string;
  raw?: unknown;
};

type MealsState = {
  history: CalorieResult[];
  addResult: (r: CalorieResult) => void;
  clear: () => void;
};

export const useMealsStore = create<MealsState>()(
  persist(
    (set) => ({
      history: [],
      addResult: (r) => set((s) => ({ history: [r, ...s.history].slice(0, 25) })),
      clear: () => set({ history: [] }),
    }),
    { name: "meals-store" }
  )
);


