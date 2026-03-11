import { generateXpTable } from "./generateXpTable";

export const MAX_CARD_LEVEL: number = 30;

export const DUPLICATE_XP = {
  common: 100,
  rare: 160,
  epic: 280,
  legendary: 800,
} as const;

export const CARD_XP_TABLE = {
  common: generateXpTable(MAX_CARD_LEVEL, 40, 6, 1.6),
  rare: generateXpTable(MAX_CARD_LEVEL, 40, 6, 1),
  epic: generateXpTable(MAX_CARD_LEVEL, 40, 6, 0.6),
  legendary: generateXpTable(MAX_CARD_LEVEL, 40, 6, 0.25),
} as const;

export type CardRarity = keyof typeof CARD_XP_TABLE;

export const getCardXpNeeded = (rarity: CardRarity, level: number) =>
  CARD_XP_TABLE[rarity][level];
