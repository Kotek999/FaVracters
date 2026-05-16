import { useMemo } from "react";
import { RARITY_CONFIG } from "../data/rarityConfig";
import { characters } from "@/data/characters";

export const sortedHeroes = useMemo(() => {
  return [...characters].sort(
    (a, b) =>
      RARITY_CONFIG[b.rarity].priority - RARITY_CONFIG[a.rarity].priority,
  );
}, [characters]);
