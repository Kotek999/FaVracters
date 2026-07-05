import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const bumblebee: CharacterBase = {
  id: "e1",
  key: "bumblebee",
  name: "Bumblebee",
  rarity: RARITY.EPIC,
  class: CharacterClass.SCOUT,
  faction: Faction.AUTOBOT,
  stars: 4,
  origin: "Cybertron",
  lore: "Najbardziej lojalny zwiadowca Autobotów i najbliższy przyjaciel ludzi. Bumblebee od początku serii chroni Sama Witwicky, stając się pomostem między ludzkością a Autobotami. Charakterystyczny żółty Camaro oraz dynamiczny styl walki sprawiają, że jest jedną z najbardziej rozpoznawalnych postaci filmów. Pomimo utraty głosu wielokrotnie udowadnia swoją odwagę i oddanie.",
  stats: { power: 72, defense: 62, intelligence: 78 },
};
