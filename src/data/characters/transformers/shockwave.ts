import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const shockwave: CharacterBase = {
  id: "l4",
  key: "shockwave",
  name: "Shockwave",
  rarity: RARITY.LEGENDARY,
  class: CharacterClass.SCIENTIST,
  faction: Faction.DECEPTICON,
  stars: 5,
  origin: "Cybertron",
  lore: "Cybertroniański naukowiec oraz jeden z najgroźniejszych Decepticonów. Shockwave pojawia się w „Dark of the Moon” jako dowódca okupowanego Chicago. Charakterystyczne jedno oko oraz gigantyczny Driller czynią go jedną z najbardziej przerażających postaci filmowej serii.",
  stats: { power: 91, defense: 84, intelligence: 100 },
};
