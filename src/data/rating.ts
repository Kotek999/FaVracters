import { CharacterStats } from "@/types/character.types";

export const calculateRating = (stats: CharacterStats): number => {
  const weighted =
    stats.power * 0.52 + stats.defense * 0.3 + stats.intelligence * 0.18;

  const rating = weighted / 10;

  return Math.min(10, Number(rating.toFixed(1)));
};
