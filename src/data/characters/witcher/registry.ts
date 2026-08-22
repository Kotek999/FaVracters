import { CharacterBase } from "@/types/character.types";
import { heroes } from "./heroes/heroes";
import { monsters } from "./monsters/monsters";

export const witcherRegistry = {
  ...heroes,
  ...monsters,
} satisfies Record<string, CharacterBase>;
