import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const optimusPrime: CharacterBase = {
  id: "l1",
  key: "optimusPrime",
  name: "Optimus Prime",
  rarity: RARITY.LEGENDARY,
  class: CharacterClass.LEADER,
  faction: Faction.AUTOBOT,
  stars: 5,
  origin: "Cybertron",
  lore: "Legendarny przywódca Autobotów oraz ostatni z Prime. W filmowej serii Michaela Bay, Optimus przybywa na Ziemię, aby chronić ludzkość przed Decepticonami i odzyskać cybertroniańskie artefakty. Znany jest ze swojego honoru, poświęcenia oraz silnego poczucia sprawiedliwości. W kolejnych filmach staje się centralną postacią konfliktu o przetrwanie Cybertronu i Ziemi, a jego historia związana jest z Matrycą Przywództwa oraz dawnymi sekretami Transformerów.",
  stats: { power: 98, defense: 96, intelligence: 92 },
};
