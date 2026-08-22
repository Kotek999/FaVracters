import { ColorValue, ImageSourcePropType } from "react-native";
import {
  CharacterStats,
  CharacterRole,
  Rarity,
  CharacterRace,
  CharacterUniverse,
} from "@/types/character.types";
import { Children, IconName } from "@/types/global";

export interface Tier<T> {
  readonly min: number;
  readonly max: number;
  readonly data: T;
}

export interface StarsProps {
  readonly stars: number;
  readonly maxStars?: number;
  readonly size?: number;
  readonly activeColor?: string;
  readonly inactiveColor?: string;
}

export type InfoTileProps = {
  icon: IconName;
  value: string;
  color: string;
  cardRarity: Rarity;
};
export interface LoreProps {
  cardLore: string;
  cardNames: string[];
}
export interface RatingBadgeProps {
  cardRating: number;
}
export interface SectionTitleProps {
  title: string;
  iconName: IconName;
}
export interface SectionContainerProps {
  children: Children;
  isRatingBadge: boolean;
  cardRating?: number;
}
export interface CardImageProps {
  cardRarity: Rarity;
  cardImage: ImageSourcePropType;
}

export interface CardNameWithStarsProps {
  cardName: string;
  cardLevel: number;
  cardStars: number;
}

export interface HeroInfoConfigProps {
  cardRarity: Rarity;
  cardUniverse: CharacterUniverse;
  cardRole: CharacterRole;
  cardRace: CharacterRace;
}

type StatTiers = Record<keyof CharacterStats, ProgressColorsProp>;

export type CharacterStatsProp = {
  cardStats: CharacterStats;
};

export interface HeroStatsConfigProps extends CharacterStatsProp {
  statTiers: StatTiers;
}

export interface StatsProps extends CharacterStatsProp {
  cardRating: number;
}

type ProgressColorsProp = {
  readonly progressColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
};

export type StatTiersData = readonly Tier<ProgressColorsProp>[];
export type RatingTiersData = readonly Tier<{
  readonly color: string;
}>[];
