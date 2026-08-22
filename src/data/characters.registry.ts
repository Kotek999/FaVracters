import { transformersRegistry } from "./characters/transformers/registry";
import { witcherRegistry } from "./characters/witcher/registry";
import { CharacterBase } from "@/types/character.types";

export const charactersRegistry = {
  ...transformersRegistry,
  ...witcherRegistry,
} satisfies Record<string, CharacterBase>;
