import { CaseItem, Rarity } from "../types";

export const groupByRarity = (items: readonly CaseItem[]) => {
  const map: Record<Rarity, CaseItem[]> = {
    common: [],
    rare: [],
    epic: [],
    legendary: [],
  };

  for (const item of items) {
    map[item.rarity].push(item);
  }

  return map;
};
