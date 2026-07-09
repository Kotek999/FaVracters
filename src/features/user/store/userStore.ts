import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandStorage, STORAGE_KEYS } from "@/utils/storage";
import {
  getPlayerXpNeeded,
  MAX_PLAYER_LEVEL,
} from "@/systems/progression/playerXp";
import { getRewardCases } from "@/systems/progression/playerRewards";
import { getRandomEpicReward } from "../utils/getRandomEpicReward";
import { LOGIN_DAYS, LOGIN_REWARDS } from "@/systems/progression/loginRewards";
import { toast } from "@/components/ui/Toast/ToastService";
import { Time } from "@/systems/time/consts";
import { createInitialUser } from "../utils/initialUserConfig";
import { UserState } from "../types";

export const userStore = create<UserState>()(
  persist(
    (set, get) => ({
      ...createInitialUser(),
      level: 1,
      xp: 0,
      language: "pl",
      setName: (name) => {
        const trimmed = name.trim();

        if (!trimmed) return;

        set({
          name: trimmed.slice(0, 16),
        });
      },
      setLanguage: (lang) => {
        set({ language: lang });
      },
      addXp: (amount) => {
        const { level, xp, pendingCases, addActivity, addEnergy } = get();

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
          addActivity({
            type: "LEVEL_UP",
            level: newLevel,
            reward: `+${reward} skrzynka`,
            createdAt: Date.now(),
          });

          addEnergy(level * 5);

          () =>
            toast.success(
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
      dailyEpicReward: null,
      rollDailyEpic: () => {
        const { dailyEpicReward } = get();

        if (dailyEpicReward) return;

        const hero = getRandomEpicReward();

        set({
          dailyEpicReward: hero.id,
        });
      },
      clearDailyEpic: () => {
        set({ dailyEpicReward: null });
      },
      claimLoginStreakReward: () => {
        const {
          loginStreakDay,
          lastLoginAt,
          loginRewardAvailable,
          addActivity,
        } = get();

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
          userStore.setState((state) => ({
            cases: state.cases + reward.cases,
          }));
        }

        if ("energy" in reward) {
          set((state) => ({
            energy: state.energy + reward.energy,
          }));

          addActivity({
            type: "REWARD_CLAIM",
            energy: reward.energy,
            createdAt: Date.now(),
          });
        }
        return reward;
      },
      claimDailyReward: () => {
        const { dailyRewardAt, addEnergy, addActivity } = get();
        const now = Date.now();

        if (now < dailyRewardAt) return false;

        (addEnergy(10),
          set((state) => ({
            energy: state.energy,
            cases: state.cases + 1,
            dailyRewardAt: now + Time.DAY,
          })));

        addActivity({
          type: "REWARD_CLAIM",
          energy: 10,
          createdAt: Date.now(),
        });
        return true;
      },
      addActivity: (activity) =>
        set((state) => {
          const next = state.activities;

          next.unshift(activity);
          if (next.length > 3) next.pop();

          return { activities: next };
        }),
      addEnergy: (amount) =>
        set((state) => ({
          energy: state.energy + amount,
        })),

      spendEnergy: (amount) => {
        const { energy, cases } = get();

        if (energy < amount) return false;

        set({
          cases: cases + 1,
          energy: energy - amount,
        });

        return true;
      },
      resetUser: () => set(createInitialUser()),
      clearStorage: async () => {
        await userStore.persist.clearStorage();
        set(createInitialUser());
      },
    }),
    {
      name: STORAGE_KEYS.user,
      storage: zustandStorage,
      partialize: (state) => ({
        id: state.id,
        name: state.name,
        language: state.language,
        level: state.level,
        xp: state.xp,
        cases: state.cases,
        pendingCases: state.pendingCases,
        dailyRewardAt: state.dailyRewardAt,
        loginStreakDay: state.loginStreakDay,
        lastLoginAt: state.lastLoginAt,
        dailyEpicReward: state.dailyEpicReward,
        activities: state.activities,
        energy: state.energy,
      }),
    },
  ),
);
