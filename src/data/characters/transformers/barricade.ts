import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const barricade: CharacterBase = {
  id: "r5",
  key: "barricade",
  name: "Barricade",
  rarity: RARITY.RARE,
  class: CharacterClass.WARRIOR,
  faction: Faction.DECEPTICON,
  stars: 3,
  origin: "Cybertron",
  lore: "Policyjny łowca Decepticonów specjalizujący się w tropieniu ludzi oraz Autobotów. Barricade wyróżnia się agresywnym stylem walki, brutalnością oraz współpracą z Frenzy’m. W filmach wielokrotnie ściga głównych bohaterów, wykorzystując zastraszanie i przewagę taktyczną.",
  stats: { power: 72, defense: 68, intelligence: 70 },
};
