import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer"; // ✅ immer 미들웨어 import

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCountStore = create<CountStore>()(
  subscribeWithSelector(
    persist(
      immer((set) => ({
        count: 0,
        increment: () =>
          set((state) => {
            state.count += 1; // draft 수정
          }),
        decrement: () =>
          set((state) => {
            state.count -= 1; // 수정된 decrement
          }),
        reset: () =>
          set((state) => {
            state.count = 0;
          }),
      })),
      {
        name: "counter", // localStorage key
      }
    )
  )
);
