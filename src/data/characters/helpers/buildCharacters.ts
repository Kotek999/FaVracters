import { characterImages } from "../images";
import { CharacterBase, Character } from "@/types/character.types";

const charactersCache = new WeakMap<object, Character[]>();

export const buildCharacters = <T extends Record<string, CharacterBase>>(
  registry: T,
): Character[] => {
  const cached = charactersCache.get(registry);

  if (cached) {
    return cached;
  }

  const characters = (Object.values(registry) as CharacterBase[]).map(
    (character) => {
      const image = characterImages[character.key];

      if (!image) {
        throw new Error(`Missing image for character: ${character.key}`);
      }

      return {
        ...character,
        image,
      };
    },
  );

  charactersCache.set(registry, characters);

  return characters;
};
