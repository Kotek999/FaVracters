import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const soundwave: CharacterBase = {
  id: "e6",
  key: "soundwave",
  name: "Soundwave",
  rarity: RARITY.EPIC,
  class: CharacterClass.SUPPORT,
  faction: Faction.DECEPTICON,
  stars: 4,
  origin: "Cybertron",
  lore: "Specjalista od szpiegostwa i komunikacji Decepticonów. Soundwave wykorzystuje technologie inwigilacji oraz swoje drony do zdobywania informacji i wspierania działań Megatrona. W filmach często działa w cieniu jako cichy i wyjątkowo niebezpieczny agent.",
  stats: { power: 80, defense: 76, intelligence: 94 },
};
