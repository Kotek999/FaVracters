import { Character, Rarity } from "@/types/character.types";

export const groupByRarity = (items: readonly Character[]) => {
  const map: Record<Rarity, Character[]> = {
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
