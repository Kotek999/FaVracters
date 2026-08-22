import { IconName } from "@/types/global";
import { Character } from "@/types/character.types";
import { LoginReward } from "../user/types";

export interface TodayProps {
  isToday: boolean;
  isFuture: boolean;
}

export interface RewardDayProps extends TodayProps {
  day: number;
  reward: LoginReward;
  epicHeroReward: Character | undefined;
  isClaimed: boolean;
}

export interface TitleProps {
  isToday: boolean;
  day: number;
}

export interface RewardProps {
  type: "day" | "cases" | "energy" | "rarity";
  reward: LoginReward;
  iconName: IconName;
}

export interface DayItemProps extends TodayProps {
  day: number;
  reward: LoginReward;
  isClaimed: boolean;
}

export interface EpicHeroItemProps extends TitleProps {
  epicHeroReward: Character | undefined;
  reward: LoginReward;
}
