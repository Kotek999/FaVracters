import { StyleProp, TextStyle } from "react-native";
import { Rarity } from "../caseOpening";
import { IconName } from "@/types/global";

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

export type LanguageCode = "pl" | "en" | "de" | "es";

export interface UserState {
  id: string;
  name: string;
  level: number;
  xp: number;
  cases: number;
  pendingCases: number;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
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
  dailyEpicReward: string | null;
  rollDailyEpic: () => void;
  clearDailyEpic: () => void;
  resetUser: () => void;
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  energy: number;
  addEnergy: (amount: number) => void;
  spendEnergy: (amount: number) => boolean;
  clearStorage: () => Promise<void>;
}

export interface ProgressLinesProps {
  total: number;
  current: number;
}

export interface CardStatsProps {
  icon: IconName;
  value: React.ReactNode;
  label: string;
  fullWidth?: boolean;
}

type NullableCardRarity = Rarity | null;

export interface CollectionProps {
  stats: CardStatsProps[];
  highestCardRarity: NullableCardRarity;
}

export interface ItemProps extends CollectionProps {
  loginStreakDay: number;
}

export interface LoginStreakStatsProps {
  loginStreakDay: number;
}

export interface ProgressProps {
  level: number;
  progress: number;
}

export interface AvatarItemProps extends ProgressProps {
  userName: string;
}

export interface LevelProgressProps {
  level: number;
  xp: number;
  xpNeeded: number;
}

export interface PendingCasesProps {
  pendingCases: number;
  claimCases: () => void;
}

export interface StatsDataProps {
  ownedCardsCount: number;
  style: StyleProp<TextStyle>;
  energy: number;
}

export type Stats =
  | {
      icon: IconName;
      value: React.JSX.Element;
      label: string;
    }
  | {
      icon: IconName;
      value: string;
      label: string;
    };
