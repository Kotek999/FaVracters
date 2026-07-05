import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const megatron: CharacterBase = {
  id: "l3",
  key: "megatron",
  name: "Megatron",
  rarity: RARITY.LEGENDARY,
  class: CharacterClass.LEADER,
  faction: Faction.DECEPTICON,
  stars: 5,
  origin: "Cybertron",
  lore: "Główny przywódca Decepticonów i odwieczny wróg Optimusa Prime. Megatron wielokrotnie próbuje przejąć kontrolę nad Cybertronem i Ziemią, wykorzystując potężne artefakty oraz armie Decepticonów. W kolejnych filmach zmienia swoje formy i tożsamości, w tym Galvatrona, pozostając symbolem destrukcji i tyranii.",
  stats: { power: 100, defense: 96, intelligence: 90 },
};
