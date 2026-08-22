import { StyleProp, TextStyle } from "react-native";
import { Rarity } from "@/types/character.types";
import { IconName } from "@/types/global";
import { CaseRef, CasesState } from "@/features/caseOpening/config/types";

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
  cases: CasesState;
  pendingCases: number;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  energy: number;
  dailyRewardAt: number;
  loginStreakDay: number;
  lastLoginAt: number;
  loginRewardAvailable: boolean;
  activities: Activity[];
  setName: (name: string) => void;
  addXp: (amount: number) => void;
  addCase: (caseRef: CaseRef, amount?: number) => void;
  useCase: (caseRef: CaseRef) => boolean;
  claimCases: () => void;
  addEnergy: (amount: number) => void;
  spendEnergy: (amount: number) => boolean;
  addActivity: (activity: Activity) => void;
  resetUser: () => void;
  clearStorage: () => Promise<void>;
  checkLoginStreak: () => boolean;
  claimLoginStreakReward: () => LoginReward | null;
  claimDailyReward: () => boolean;
  dailyEpicReward: string | null;
  rollDailyEpic: () => void;
  clearDailyEpic: () => void;
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
