import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const wheeljack: CharacterBase = {
  id: "r4",
  key: "wheeljack",
  name: "Wheeljack",
  rarity: RARITY.RARE,
  class: CharacterClass.SCIENTIST,
  faction: Faction.AUTOBOT,
  stars: 3,
  origin: "Cybertron",
  lore: "Ekscentryczny naukowiec i wynalazca Autobotów. W filmowym uniwersum Wheeljack pojawia się jako technologiczny specjalista pomagający drużynie dzięki swojej wiedzy oraz eksperymentalnym rozwiązaniom. W „Rise of the Beasts” przedstawiony został jako bardziej wycofany, ale niezwykle inteligentny członek zespołu.",
  stats: { power: 70, defense: 60, intelligence: 90 },
};
