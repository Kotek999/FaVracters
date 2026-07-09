import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { AnimatedStyle, SharedValue } from "react-native-reanimated";
import { characterImages } from "@/assets/images/characters";
import { rarityLabels } from "./consts";
import { IconName } from "@/types/global";

export const RARITY = {
  COMMON: "common",
  RARE: "rare",
  EPIC: "epic",
  LEGENDARY: "legendary",
} as const;

export type Rarity = (typeof RARITY)[keyof typeof RARITY];
export type RarityLabel = keyof typeof rarityLabels;

export enum CharacterClass {
  LEADER = "przywódca",
  WARRIOR = "wojownik",
  SCOUT = "zwiadowca",
  SCIENTIST = "naukowiec",
  ASSASSIN = "zabójca",
  SUPPORT = "wsparcie",
  TANK = "wytrzymały",
}

export enum Faction {
  AUTOBOT = "autobot",
  DECEPTICON = "decepticon",
}

export interface CharacterStats {
  readonly power: number;
  readonly defense: number;
  readonly intelligence: number;
}

export type SV = SharedValue<number>;
export type Stage = "spin" | "result";

export type AnimatedViewStyle = AnimatedStyle<StyleProp<ViewStyle>>;

export type CharacterKey = keyof typeof characterImages;

export interface CharacterBase {
  readonly id: string;
  readonly key: CharacterKey;
  readonly name: string;
  readonly rarity: Rarity;
  readonly class: CharacterClass;
  readonly faction: Faction;
  readonly stars: number;
  readonly origin: string;
  readonly lore: string;
  readonly stats: CharacterStats;
}

export interface Character extends CharacterBase {
  readonly image: ImageSourcePropType;
}

export interface CharacterWithRating extends Character {
  readonly rating: number;
}

export type CharactersIndex = Record<string, CharacterWithRating>;

export interface CardProps {
  card: CharacterWithRating;
}

export interface CaseOpeningProps {
  readonly items: readonly Character[];
  readonly pityChance: number;
  readonly getRarity: () => Rarity;
  readonly onWin?: (item: Character) => void;
  readonly onReset?: () => void;
  readonly autoSpin?: boolean;
}

export interface ResultViewProps {
  readonly winner: Character;
  readonly pityChance: number;
  readonly onSpin: () => void;
  readonly onBack: () => void;
}

export interface ImagePiecesProps {
  readonly source: ImageSourcePropType;
  readonly styleTL: AnimatedViewStyle;
  readonly styleTR: AnimatedViewStyle;
  readonly styleBL: AnimatedViewStyle;
  readonly styleBR: AnimatedViewStyle;
}

export interface PreRollViewProps extends ImagePiecesProps {
  readonly onOpen: () => void;
}

export interface CaseOpeningWithPreRollProps {
  readonly items: readonly Character[];
  readonly onWin?: (item: Character) => void;
}

export interface PrimaryCaseProps {
  cases: number;
}

export interface UserCasesWithEnergyProps extends PrimaryCaseProps {
  energy: number;
}

export interface RarityItem {
  key: Rarity;
  label: string;
  chance: number;
  dotColor: string;
}

export interface DropRarityRowProps {
  item: RarityItem;
}

export interface DropChancesWithButtonItemProps {
  onOpen: () => void;
}

export interface ResultActionButtonsProps {
  winner: Character;
  onSpin: () => void;
  onBack: () => void;
}

export interface DroppedCardProps {
  winner: Character;
}

export interface OpenCaseButtonProps {
  title: string;
  iconName: IconName;
  isDefault?: boolean;
  style?: ViewStyle | undefined;
  onPress: () => void;
}

interface Spin {
  readonly items: readonly Character[];
  readonly getRarity: () => "common" | "rare" | "epic" | "legendary";
  readonly onWin?: (item: Character) => void;
}

export interface CaseSpinProps extends Spin {
  readonly autoSpin?: boolean;
}

export interface SpinProps extends Spin {
  pools: Record<Rarity, Character[]>;
}

export interface NewHeroCardProps {
  result: {
    isNew: boolean;
    xpGained: number;
    currentLevel: number;
  };
  item: Character;
  playerXp: number;
}
