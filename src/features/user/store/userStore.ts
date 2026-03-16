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
import { LOGIN_DAYS, LOGIN_REWARDS } from "@/systems/progression/loginRewards";
import { Rarity } from "@/features/caseOpening";
import { Time } from "@/systems/time/consts";

export type LoginReward = { cases: number } | { rarity: Rarity };

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
  dailyRewardAt: number;
  claimDailyReward: () => boolean;
  loginStreakDay: number;
  lastLoginAt: number;
  loginRewardAvailable: boolean;
  checkLoginStreak: () => boolean;
  claimLoginStreakReward: () => LoginReward | null;
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
  dailyRewardAt: Date.now(),
  loginStreakDay: 0,
  lastLoginAt: 0,
  loginRewardAvailable: false,
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
      checkLoginStreak: () => {
        const { lastLoginAt } = get();
        const now = Date.now();

        if (!lastLoginAt) {
          set({
            loginRewardAvailable: true,
          });
          return true;
        }

        const diff = now - lastLoginAt;

        if (diff >= Time.DAY) {
          set({
            loginRewardAvailable: true,
          });
          return true;
        }
        return false;
      },
      claimLoginStreakReward: () => {
        const { loginStreakDay, lastLoginAt, loginRewardAvailable } = get();

        if (!loginRewardAvailable) return null;

        const now = Date.now();
        const diff = now - lastLoginAt;

        if (diff < Time.DAY) return null;

        let day = loginStreakDay;

        if (diff > 2 * Time.DAY) {
          day = 0;
        }

        const reward = LOGIN_REWARDS[day];
        let nextDay = day + 1;

        if (nextDay >= LOGIN_DAYS) nextDay = 0;

        set({
          loginStreakDay: nextDay,
          lastLoginAt: now,
          loginRewardAvailable: false,
        });

        if ("cases" in reward) {
          userStore.setState((s) => ({
            cases: s.cases + reward.cases,
          }));
        }
        return reward;
      },
      claimDailyReward: () => {
        const { dailyRewardAt } = get();
        const now = Date.now();

        if (now < dailyRewardAt) return false;

        set((state) => ({
          cases: state.cases + 1,
          dailyRewardAt: now + Time.DAY,
        }));
        return true;
      },
      resetUser: () => set(createInitialUser()),
      clearStorage: async () => {
        await userStore.persist.clearStorage();
        set(createInitialUser());
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
        dailyRewardAt: state.dailyRewardAt,
        loginStreakDay: state.loginStreakDay,
        lastLoginAt: state.lastLoginAt,
      }),
    },
  ),
);
