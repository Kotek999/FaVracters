import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const ratchet: CharacterBase = {
  id: "r1",
  key: "ratchet",
  name: "Ratchet",
  rarity: RARITY.RARE,
  class: CharacterClass.SCIENTIST,
  faction: Faction.AUTOBOT,
  stars: 3,
  origin: "Cybertron",
  lore: "Lekarz i mechanik Autobotów odpowiedzialny za naprawy oraz wsparcie techniczne drużyny. Ratchet jest jednym z najbardziej doświadczonych członków ekipy Optimusa. W filmach wielokrotnie pomaga zarówno Autobotom, jak i ludziom, wykorzystując zaawansowaną wiedzę medyczną oraz technologiczną.",
  stats: { power: 55, defense: 70, intelligence: 96 },
};
