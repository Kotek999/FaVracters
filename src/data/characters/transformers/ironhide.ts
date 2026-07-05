import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const ironhide: CharacterBase = {
  id: "e2",
  key: "ironhide",
  name: "Ironhide",
  rarity: RARITY.EPIC,
  class: CharacterClass.TANK,
  faction: Faction.AUTOBOT,
  stars: 4,
  origin: "Cybertron",
  lore: "Specjalista od ciężkiego uzbrojenia i ochroniarz Optimusa Prime’a. Ironhide wyróżnia się brutalną skutecznością na polu walki oraz wojskowym podejściem do konfliktu. W filmach pełni rolę głównego żołnierza Autobotów, często korzystając z potężnych dział kinetycznych. Jego historia kończy się tragicznie podczas wydarzeń związanych ze zdradą Sentinel Prime.",
  stats: { power: 90, defense: 92, intelligence: 65 },
};
