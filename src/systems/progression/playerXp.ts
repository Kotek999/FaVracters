import { generateXpTable } from "./generateXpTable";

export const MAX_PLAYER_LEVEL: number = 50;

export const PLAYER_XP_TABLE = generateXpTable(MAX_PLAYER_LEVEL, 120, 40, 1);

export const PLAYER_XP_FROM_CARD = {
  common: 10,
  rare: 20,
  epic: 40,
  legendary: 100,
} as const;

export const getPlayerXpNeeded = (level: number) => PLAYER_XP_TABLE[level];
