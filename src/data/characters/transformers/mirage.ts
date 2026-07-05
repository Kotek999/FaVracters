import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const mirage: CharacterBase = {
  id: "r3",
  key: "mirage",
  name: "Mirage",
  rarity: RARITY.RARE,
  class: CharacterClass.SCOUT,
  faction: Faction.AUTOBOT,
  stars: 3,
  origin: "Cybertron",
  lore: "Autobot wprowadzony w „Transformers: Rise of the Beasts”. Mirage wyróżnia się poczuciem humoru, zdolnością tworzenia hologramów oraz wyjątkową więzią z ludźmi. W filmie pełni rolę sprytnego i szybkiego wojownika wspierającego głównych bohaterów podczas walki z Terrorconami.",
  stats: { power: 68, defense: 58, intelligence: 86 },
};
