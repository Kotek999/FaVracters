import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const bonecrusher: CharacterBase = {
  id: "r6",
  key: "bonecrusher",
  name: "Bonecrusher",
  rarity: RARITY.RARE,
  class: CharacterClass.TANK,
  faction: Faction.DECEPTICON,
  stars: 3,
  origin: "Cybertron",
  lore: "Ciężkozbrojny Decepticon o niezwykle agresywnym charakterze. Bonecrusher pojawia się w pierwszym filmie podczas autostradowej bitwy przeciwko Autobotom. Jego charakterystyczna masywna łyżka minerska oraz brutalna siła czynią go jednym z najbardziej destrukcyjnych wojowników Megatrona.",
  stats: { power: 78, defense: 80, intelligence: 55 },
};
