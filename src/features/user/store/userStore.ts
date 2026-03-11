import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as Crypto from "expo-crypto";
import { zustandStorage } from "@/utils/storage";
import {
  getPlayerXpNeeded,
  MAX_PLAYER_LEVEL,
} from "@/systems/progression/playerXp";
import { getRewardCases } from "@/systems/progression/playerRewards";
import { Alert } from "react-native";

export interface UserState {
  id: string;
  name: string;
  level: number;
  xp: number;
  cases: number;
  pendingCases: number;
  setName: (newName: string) => void;
  addXp: (amount: number) => void;
  claimCases: () => void;
  useCase: () => boolean;
  resetUser: () => void;
  clearStorage: () => Promise<void>;
}

const STORAGE_KEY = "user-storage";

const randomName = () => `Player${Math.floor(100000 + Math.random() * 900000)}`;

const createInitialUser = () => ({
  id: Crypto.randomUUID(),
  name: randomName(),
  level: 1,
  xp: 0,
  cases: 0,
  pendingCases: 0,
});

export const userStore = create<UserState>()(
  persist(
    (set, get) => ({
      ...createInitialUser(),

      level: 1,
      xp: 0,

      setName: (newName) =>
        set({
          name: newName,
        }),

      addXp: (amount) => {
        const { level, xp, pendingCases } = get();

        if (level >= MAX_PLAYER_LEVEL) return;

        let newXp = xp + amount;
        let newLevel = level;
        let reward = 0;

        while (newLevel < MAX_PLAYER_LEVEL) {
          const needed = getPlayerXpNeeded(newLevel);

          if (newXp < needed) break;

          newXp -= needed;
          newLevel++;

          reward += getRewardCases(newLevel);
        }

        const totalPending = pendingCases + reward;

        set({
          xp: newXp,
          level: newLevel,
          pendingCases: totalPending,
        });

        if (newLevel > level) {
          Alert.alert(
            "Level Up!",
            `Osiągnąłeś poziom ${newLevel}${
              totalPending > 0
                ? `\n🎁 Masz ${totalPending} skrzynek do odebrania w profilu`
                : ""
            }`,
          );
        }
      },

      claimCases: () => {
        const { pendingCases } = get();

        if (pendingCases === 0) return;

        set((state) => ({
          cases: state.cases + state.pendingCases,
          pendingCases: 0,
        }));
      },

      useCase: () => {
        const { cases } = get();

        if (cases <= 0) return false;

        set((state) => ({
          cases: state.cases - 1,
        }));

        return true;
      },

      resetUser: () => set(createInitialUser()),

      clearStorage: async () => {
        await userStore.persist.clearStorage();
        set({
          ...createInitialUser(),
          level: 1,
          xp: 0,
        });
      },
    }),
    {
      name: STORAGE_KEY,
      storage: zustandStorage,
      partialize: (state) => ({
        id: state.id,
        name: state.name,
        level: state.level,
        xp: state.xp,
        cases: state.cases,
        pendingCases: state.pendingCases,
      }),
    },
  ),
);
