import { characters } from "./characters";
import { calculateRating } from "./rating";
import { CharactersIndex } from "@/features/caseOpening/types";

let cache: CharactersIndex | null = null;

export const getCharactersEngine = () => {
  if (cache) return cache;

  const result: CharactersIndex = {};

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    result[character.id] = {
      ...character,
      rating: calculateRating(character.stats),
    };
  }

  cache = result;
  return cache;
};
