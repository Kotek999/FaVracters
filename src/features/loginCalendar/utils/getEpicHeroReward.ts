import { characters } from "@/data/characters";
import { CaseItem } from "@/features/caseOpening";

export const getEpicHeroReward = (
  dailyEpicReward: string | null,
): CaseItem | undefined => {
  return characters.find((character) => character.id === dailyEpicReward);
};
