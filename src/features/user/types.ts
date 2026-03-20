import { Rarity } from "../caseOpening";

export type Activity =
  | {
      type: "HERO_UNLOCK";
      heroName: string;
      rarity: Rarity;
      createdAt: number;
    }
  | {
      type: "LEVEL_UP";
      level: number;
      reward?: string;
      createdAt: number;
    }
  | {
      type: "REWARD_CLAIM";
      energy: number;
      createdAt: number;
    };

export type LoginReward =
  | { day: number }
  | { cases: number }
  | { energy: number }
  | { rarity: Rarity };

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
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  energy: number;
  addEnergy: (amount: number) => void;
  spendEnergy: (amount: number) => boolean;
  clearStorage: () => Promise<void>;
}
