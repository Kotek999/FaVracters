import { allCharacters } from "@/data/characters";
import { Character } from "@/types/character.types";

export const getEpicHeroReward = (
  dailyEpicReward: string | null,
): Character | undefined => {
  return allCharacters.find((character) => character.id === dailyEpicReward);
};
