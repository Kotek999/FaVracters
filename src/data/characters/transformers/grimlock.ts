import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const grimlock: CharacterBase = {
  id: "l2",
  key: "grimlock",
  name: "Grimlock",
  rarity: RARITY.LEGENDARY,
  class: CharacterClass.TANK,
  faction: Faction.AUTOBOT,
  stars: 5,
  origin: "Cybertron",
  lore: "Najpotężniejszy z Dinobotów i brutalna siła Autobotów. Grimlock debiutuje w „Age of Extinction” jako ogromny mechaniczny tyranozaur podporządkowany Optimusowi Prime. Znany jest z dzikiego stylu walki, niszczycielskiej siły oraz zdolności ziania ogniem.",
  stats: { power: 99, defense: 90, intelligence: 55 },
};
