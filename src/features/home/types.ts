import { Activity } from "../user/types";

export interface ItemEmptyStateProps {
  title: string;
  subtitle?: string;
}

export interface ItemsProps {
  activities: Activity[];
}

export interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface FooterProps {
  isReady: boolean;
  claimDailyReward: () => boolean;
}

export type ActivityByType = {
  [K in Activity["type"]]: Extract<Activity, { type: K }>;
};

type DailyHeroConfig = {
  label: string;
  buttonLabel: string;
  icon: string;
};

export interface DailyHeroDescriptionWithButtonProps {
  dailyHeroConfig: DailyHeroConfig;
  onPressGoToScreen: () => void;
}

export interface ContentProps extends TimerProps, FooterProps {}

export interface ItemProps {
  dailyRewardAt: number;
  claimDailyReward: () => boolean;
}
