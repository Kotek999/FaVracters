import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { AnimatedStyle, SharedValue } from "react-native-reanimated";
import { IconName } from "@/types/global";
import { CaseType, CaseRef } from "./config/types";
import {
  Rarity,
  Character,
  CharacterWithRating,
} from "@/types/character.types";

export type SV = SharedValue<number>;
export type Stage = "spin" | "result";

export type AnimatedViewStyle = AnimatedStyle<StyleProp<ViewStyle>>;

export interface CardProps {
  card: CharacterWithRating;
}

export interface CaseOpeningProps {
  readonly caseRef: CaseRef;
  readonly items: readonly Character[];
  readonly pityChance: number;
  readonly getRarity: () => Rarity;
  readonly onWin?: (item: Character) => void;
  readonly onReset?: () => void;
  readonly autoSpin?: boolean;
}

export interface ResultViewProps {
  readonly caseRef: CaseRef;
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
  readonly caseRef: CaseRef;
  readonly onOpen: () => void;
}

export interface CaseOpeningWithPreRollProps {
  readonly caseRef: CaseRef;
  readonly items: readonly Character[];
  readonly onWin?: (item: Character) => void;
}

export interface CasesLeftProps {
  amount: number;
}

export interface UserCasesWithEnergyProps extends CasesLeftProps {
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
  readonly caseType: CaseType;
  onOpen: () => void;
}

export interface ResultActionButtonsProps {
  readonly caseRef: CaseRef;
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
  readonly getRarity: () => Rarity;
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

export interface ChancesProps {
  readonly category: CaseType;
  readonly caseId: string;
}

export interface ChancesWithButtonItemProps {
  readonly caseRef: CaseRef;
  readonly onOpen: () => void;
}

export type PrimaryCaseProps = {
  caseRef: CaseRef;
  source: ImageSourcePropType;
  title: string;
  subtitle: string;
  cases: number;
};
