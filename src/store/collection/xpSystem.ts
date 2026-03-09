import type { Rarity } from "@/features/caseOpening";

export const DUPLICATE_XP = {
  common: 100,
  rare: 160,
  epic: 280,
  legendary: 800,
} as const;

export const MAX_LEVEL = 30;

const generateXpTable = (scale: number) => {
  const table: number[] = [0];

  for (let lvl = 1; lvl <= MAX_LEVEL; lvl++) {
    const base = lvl * lvl * 6 + lvl * 40;

    table[lvl] = Math.round(base * scale);
  }

  return table;
};

export const XP_TABLE = {
  common: generateXpTable(1.6),
  rare: generateXpTable(1.0),
  epic: generateXpTable(0.6),
  legendary: generateXpTable(0.25),
} as const;

export const getXpNeeded = (rarity: Rarity, level: number) =>
  XP_TABLE[rarity][level];
