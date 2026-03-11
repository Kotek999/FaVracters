import type { CaseItem, Rarity } from "../caseOpening";

export type FilterMode = "all" | "owned" | "missing";
export type Corner = "top" | "right" | "bottom" | "left";

export interface DiamondGeometry {
  diamondPoints: string;
  topPoints: string;
  rightPoints: string;
  bottomPoints: string;
  leftPoints: string;
  textY: number;
  fontSize: number;
}

export interface CardItemProps {
  readonly item: CaseItem;
}

export interface DiamondLevelProps {
  item: CaseItem;
  SIZE?: number;
  level: number;
}

export interface PolygonConfig {
  points: string;
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
  handleLevelUp: () => void;
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
  addDuplicate: Action<AddDuplicateResult>;
  levelUp: Action<void>;
  clear: () => void;
  clearStorage: () => Promise<void>;
}
