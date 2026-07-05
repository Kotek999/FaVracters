import { characters } from "@/data/characters";
import { Character } from "@/features/caseOpening";

export const getEpicHeroReward = (
  dailyEpicReward: string | null,
): Character | undefined => {
  return characters.find((character) => character.id === dailyEpicReward);
};
