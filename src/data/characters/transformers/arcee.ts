import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const arcee: CharacterBase = {
  id: "e3",
  key: "arcee",
  name: "Arcee",
  rarity: RARITY.EPIC,
  class: CharacterClass.SCOUT,
  faction: Faction.AUTOBOT,
  stars: 4,
  origin: "Cybertron",
  lore: "Jedna z najbardziej mobilnych wojowniczek Autobotów. W „Transformers: Revenge of the Fallen” Arcee działa jako część trio motocyklowych Autobotów specjalizujących się w szybkich akcjach bojowych i zwiadowczych. Jej styl walki opiera się na prędkości, akrobatyce oraz precyzyjnych atakach.",
  stats: { power: 76, defense: 60, intelligence: 82 },
};
