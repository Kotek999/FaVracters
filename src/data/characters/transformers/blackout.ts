import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const blackout: CharacterBase = {
  id: "e7",
  key: "blackout",
  name: "Blackout",
  rarity: RARITY.EPIC,
  class: CharacterClass.TANK,
  faction: Faction.DECEPTICON,
  stars: 4,
  origin: "Cybertron",
  lore: "Pierwszy Decepticon pokazany w serii Michael Bay. Blackout odpowiada za brutalny atak na bazę wojskową w Katarze, prezentując ogromną siłę ognia oraz przewagę technologiczną Decepticonów. Towarzyszy mu miniaturowy Scorponok, używany do eliminacji przeciwników.",
  stats: { power: 94, defense: 88, intelligence: 55 },
};
