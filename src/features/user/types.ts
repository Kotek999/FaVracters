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
    };

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
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  clearStorage: () => Promise<void>;
}
