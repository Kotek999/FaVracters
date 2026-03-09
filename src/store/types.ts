import type { Rarity } from "@/features/caseOpening";

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
