import { CaseItem, Rarity } from "../caseOpening";

interface HeroRarityProps {
  chance: number;
  priority: number;
  opacity: number;
  color: string;
}

export type RarityConfig = Record<Rarity, HeroRarityProps>;

export interface HeroChancesRowProps {
  rarity: HeroRarityProps;
  item: CaseItem;
}
