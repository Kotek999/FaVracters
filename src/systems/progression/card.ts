import { characters } from "@/data/characters";

export const TOTAL_CARDS = characters.length;
export const RARITY_ORDER = {
  common: 1,
  rare: 2,
  epic: 3,
  legendary: 4,
} as const;
