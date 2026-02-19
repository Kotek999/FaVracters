import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as Crypto from "expo-crypto";
import { zustandStorage } from "../storage";

export interface UserState {
  id: string;
  name: string;
  setName: (newName: string) => void;
  resetUser: () => void;
  clearStorage: () => Promise<void>;
}

const STORAGE_KEY = "user-storage";

const randomName = () => `Player${Math.floor(100000 + Math.random() * 900000)}`;

const createInitialUser = () => ({
  id: Crypto.randomUUID(),
  name: randomName(),
});

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...createInitialUser(),

      setName: (newName) =>
        set({
          name: newName,
        }),

      resetUser: () => set(createInitialUser()),

      clearStorage: async () => {
        await useUserStore.persist.clearStorage();
        set(createInitialUser());
      },
    }),
    {
      name: STORAGE_KEY,
      storage: zustandStorage,
      partialize: (state) => ({
        id: state.id,
        name: state.name,
      }),
    },
  ),
);
