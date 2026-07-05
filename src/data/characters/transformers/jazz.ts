import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const jazz: CharacterBase = {
  id: "r2",
  key: "jazz",
  name: "Jazz",
  rarity: RARITY.RARE,
  class: CharacterClass.WARRIOR,
  faction: Faction.AUTOBOT,
  stars: 3,
  origin: "Cybertron",
  lore: "Zastępca Optimusa Prime oraz mistrz szybkich i precyzyjnych ataków. Jazz pojawia się w pierwszym filmie jako elegancki i charyzmatyczny Autobot fascynujący się kulturą Ziemi. Pomimo stosunkowo krótkiej obecności odegrał ważną rolę podczas bitwy o AllSpark, gdzie ginie z rąk Megatrona.",
  stats: { power: 74, defense: 66, intelligence: 84 },
};
