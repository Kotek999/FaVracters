import { characterCollections } from "./collections";
import { calculateRating } from "./rating";
import { CharacterEngine, CharacterWithRating } from "@/types/character.types";

let cache: CharacterEngine | null = null;

export const getCharactersEngine = (): CharacterEngine => {
  if (cache) {
    return cache;
  }

  const byId: Record<string, CharacterWithRating> = {};
  const all: CharacterWithRating[] = [];
  const collections: Record<string, CharacterWithRating[]> = {};
  const entries = Object.entries(characterCollections);

  for (let i = 0; i < entries.length; i++) {
    const [collectionName, characters] = entries[i];
    const collection: CharacterWithRating[] = [];

    for (let j = 0; j < characters.length; j++) {
      const character = characters[j];
      const characterWithRating: CharacterWithRating = {
        ...character,
        rating: calculateRating(character.stats),
      };
      byId[characterWithRating.id] = characterWithRating;
      all.push(characterWithRating);
      collection.push(characterWithRating);
    }
    collections[collectionName] = collection;
  }

  cache = {
    byId,
    all,
    collections,
  };
  return cache;
};
