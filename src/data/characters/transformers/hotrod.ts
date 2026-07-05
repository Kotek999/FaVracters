import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const hotrod: CharacterBase = {
  id: "e4",
  key: "hotrod",
  name: "Hot Rod",
  rarity: RARITY.EPIC,
  class: CharacterClass.SCOUT,
  faction: Faction.AUTOBOT,
  stars: 4,
  origin: "Cybertron",
  lore: "Młody i impulsywny Autobot wprowadzony w „The Last Knight”. Hot Rod działa głównie we Francji i posiada technologię manipulowania czasem podczas walki. Jego dynamiczna osobowość oraz szybki styl działania odróżniają go od bardziej doświadczonych Autobotów.",
  stats: { power: 80, defense: 70, intelligence: 75 },
};
