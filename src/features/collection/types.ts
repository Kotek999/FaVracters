import { Animated, ImageSourcePropType } from "react-native";
import type { Character, Rarity } from "../caseOpening";

export interface CardItemProps {
  readonly item: Character;
}

export interface ProgressBarAnimationsProps {
  progress: number;
  canLevelUp: boolean;
}

export interface ProgressBarProps {
  xp: number;
  xpNeeded: number;
  height?: number;
  canLevelUp: boolean;
  onLevelUp?: () => void;
}

type Action<T> = (id: string, rarity: Rarity) => T;

export type CollectionActions =
  | "addDuplicate"
  | "levelUp"
  | "clear"
  | "clearStorage";

interface AddDuplicateResult {
  isNew: boolean;
  xpGained: number;
  currentLevel: number;
}

export interface CardProgress {
  level: number;
  xp: number;
  copies: number;
  rarity: Rarity;
}

export interface AddItemResult {
  isDuplicate: boolean;
  level: number;
}

export interface CollectionState {
  items: Record<string, CardProgress>;
  ownedCardsCount: number;
  highestCardRarity: Rarity | null;
  addDuplicate: Action<AddDuplicateResult>;
  levelUp: Action<void>;
  clear: () => void;
  clearStorage: () => Promise<void>;
}

export type FilterMode = "all" | "owned" | "missing";

export enum Filter {
  ALL = "all",
  OWNED = "owned",
  MISSING = "missing",
}

export interface FilterButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

export interface FilterButtonsProps {
  filterMode: FilterMode;
  setFilterMode: React.Dispatch<React.SetStateAction<FilterMode>>;
}

export type FilterButtonsData = {
  label: string;
  filterMode: FilterMode;
}[];

type CardName = {
  cardName?: string;
};

type CardRarity = {
  cardRarity: Rarity;
};

type CardUnlockedInfo = {
  imageSource: ImageSourcePropType;
  cardLevel: number;
  xp: number;
  xpNeeded: number;
  canLevelUp: boolean;
  onLevelUp: () => void;
  onPress: () => void;
};

export type FooterProps = CardName & CardRarity;

export interface HeroInfoProps extends FooterProps {
  isLevel?: boolean;
  cardLevel?: number;
}

export interface CardLockedProps extends FooterProps {
  imageSource: ImageSourcePropType;
}

export interface ShineAnimationProps {
  shineAnim: Animated.Value;
}

export interface AnimatedGradientProps extends ShineAnimationProps {
  animatedWidth: Animated.AnimatedInterpolation<string | number>;
  canLevelUp: boolean;
}

export interface CardLockedItemProps extends FooterProps {
  imageSource: ImageSourcePropType;
}

export interface GradientFooterProps extends FooterProps {
  cardLevel: number;
}

export interface TouchableDetailsBadgeProps {
  onPress: () => void;
}

export type CardUnlockedProps = CardUnlockedInfo & FooterProps;
export type CardUnlockedItemProps = CardUnlockedInfo & CardItemProps;

export interface CardProgressProps {
  cardId: string;
}
