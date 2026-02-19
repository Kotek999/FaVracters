import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { AnimatedStyle, SharedValue } from "react-native-reanimated";

export const RARITIES = ["common", "rare", "epic", "legendary"] as const;

export type Rarity = (typeof RARITIES)[number];

export type SV = SharedValue<number>;
export type Stage = "spin" | "result";

export type AnimatedViewStyle = AnimatedStyle<StyleProp<ViewStyle>>;

export interface CaseItem {
  readonly id: string;
  readonly name: string;
  readonly image: ImageSourcePropType | string;
  readonly rarity: Rarity;
}

export interface CaseOpeningProps {
  readonly items: readonly CaseItem[];
  readonly pityChance: number;
  readonly getRarity: () => Rarity;
  readonly onWin?: (item: CaseItem) => void;
  readonly onReset?: () => void;
  readonly autoSpin?: boolean;
}

export interface ResultViewProps {
  readonly winner: CaseItem;
  readonly pityChance: number;
  readonly onSpin: () => void;
  readonly onBack: () => void;
}

export interface PreRollViewProps {
  readonly source: ImageSourcePropType;
  readonly styleTL: AnimatedViewStyle;
  readonly styleTR: AnimatedViewStyle;
  readonly styleBL: AnimatedViewStyle;
  readonly styleBR: AnimatedViewStyle;
  readonly onOpen: () => void;
}

export interface CaseOpeningWithPreRollProps {
  readonly items: readonly CaseItem[];
  readonly onWin?: (item: CaseItem) => void;
}
