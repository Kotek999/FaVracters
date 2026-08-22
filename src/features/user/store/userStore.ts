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
import { addRandomCases } from "../utils/addRandomCases";
import { getCaseAmount } from "@/features/caseOpening/utils/getCaseAmount";
import { updateCaseAmount } from "@/features/caseOpening/utils/updateCaseAmount";
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
      addCase: (caseRef, amount = 1) => {
        set((state) => ({
          cases: updateCaseAmount(state.cases, caseRef, amount),
        }));
      },
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
          get().addActivity({
            type: "LEVEL_UP",
            level: newLevel,
            reward: reward > 0 ? `+${reward} skrzynka` : undefined,
            createdAt: Date.now(),
          });

          get().addEnergy(level * 5);
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
        const amount = get().pendingCases;

        if (amount <= 0) return;

        set((state) => ({
          cases: addRandomCases(state.cases, amount),
          pendingCases: 0,
        }));
      },
      useCase: (caseRef) => {
        const amount = getCaseAmount(get().cases, caseRef);

        if (amount <= 0) {
          return false;
        }

        set((state) => ({
          cases: updateCaseAmount(state.cases, caseRef, -1),
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
          set((state) => ({
            cases: addRandomCases(state.cases, reward.cases),
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
        const { dailyRewardAt } = get();

        const now = Date.now();

        if (now < dailyRewardAt) return false;

        set((state) => ({
          energy: state.energy + 10,
          cases: addRandomCases(state.cases, 1),
          dailyRewardAt: now + Time.DAY,
        }));

        get().addActivity({
          type: "REWARD_CLAIM",
          energy: 10,
          createdAt: Date.now(),
        });

        return true;
      },
      addActivity: (activity) => {
        set((state) => {
          const next = [activity, ...state.activities].slice(0, 3);

          return {
            activities: next,
          };
        });
      },
      addEnergy: (amount) =>
        set((state) => ({
          energy: state.energy + amount,
        })),

      spendEnergy: (amount) => {
        const { energy } = get();

        if (energy < amount) return false;

        set({
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
