import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const brawl: CharacterBase = {
  id: "r7",
  key: "brawl",
  name: "Brawl",
  rarity: RARITY.RARE,
  class: CharacterClass.TANK,
  faction: Faction.DECEPTICON,
  stars: 3,
  origin: "Cybertron",
  lore: "Decepticon przekształcający się w czołg, wyspecjalizowany w bezpośredniej wojnie i niszczeniu. Brawl bierze udział w finałowej bitwie pierwszego filmu, wykorzystując ciężkie uzbrojenie przeciwko siłom militarnym oraz Autobotom.",
  stats: { power: 85, defense: 85, intelligence: 60 },
};
