import { CaseType } from "../caseOpening/config/types";
import { Character, Rarity } from "@/types/character.types";

interface HeroRarityProps {
  chance: number;
  priority: number;
  opacity: number;
  color: string;
}

export type RarityConfig = Record<Rarity, HeroRarityProps>;

export interface HeroChancesRowProps {
  rarity: HeroRarityProps;
  item: Character;
}

export interface HeroesRowsProps {
  readonly category: CaseType;
  readonly caseId: string;
}
