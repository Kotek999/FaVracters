import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const fallen: CharacterBase = {
  id: "l6",
  key: "fallen",
  name: "The Fallen",
  rarity: RARITY.LEGENDARY,
  class: CharacterClass.LEADER,
  faction: Faction.DECEPTICON,
  stars: 5,
  origin: "Starożytny Cybertron",
  lore: "Jeden z pierwszych Prime oraz główny antagonista „Revenge of the Fallen”. The Fallen zdradził swoich braci i sprzymierzył się z Megatronem, aby wykorzystać energię Słońca do odbudowy Cybertronu. Jest starożytną, niemal mistyczną postacią symbolizującą upadek dawnych ideałów Prime.",
  stats: { power: 99, defense: 98, intelligence: 95 },
};
