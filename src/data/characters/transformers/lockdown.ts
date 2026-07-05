import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const lockdown: CharacterBase = {
  id: "l5",
  key: "lockdown",
  name: "Lockdown",
  rarity: RARITY.LEGENDARY,
  class: CharacterClass.ASSASSIN,
  faction: Faction.DECEPTICON,
  stars: 5,
  origin: "Brak danych",
  lore: "Międzygalaktyczny łowca nagród wprowadzony w „Age of Extinction”. Lockdown nie jest typowym Decepticonem — działa na własnych zasadach, polując na Transformerów dla tajemniczych Stwórców. Znany jest z chłodnego profesjonalizmu, zaawansowanej technologii oraz brutalnej skuteczności.",
  stats: { power: 92, defense: 80, intelligence: 88 },
};
