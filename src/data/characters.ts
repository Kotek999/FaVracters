import { Character } from "@/features/caseOpening/types";
import { charactersRegistry } from "./characters.registry";
import { characterImages } from "@/assets/images/characters";

export const characters: Character[] = Object.values(charactersRegistry).map(
  (character) => ({
    ...character,
    image: characterImages[character.key],
  }),
);
