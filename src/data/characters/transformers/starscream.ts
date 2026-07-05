import {
  CharacterBase,
  CharacterClass,
  Faction,
  RARITY,
} from "@/features/caseOpening/types";

export const starscream: CharacterBase = {
  id: "e5",
  key: "starscream",
  name: "Starscream",
  rarity: RARITY.EPIC,
  class: CharacterClass.ASSASSIN,
  faction: Faction.DECEPTICON,
  stars: 4,
  origin: "Cybertron",
  lore: "Drugi po Megatronie dowódca Decepticonów oraz specjalista od walki powietrznej. Starscream jest ambitny, zdradliwy i wielokrotnie próbuje wykorzystać chaos wojny dla własnych korzyści. W filmach pełni rolę głównego lotniczego wojownika Decepticonów aż do swojej śmierci w „Dark of the Moon”.",
  stats: { power: 82, defense: 58, intelligence: 88 },
};
