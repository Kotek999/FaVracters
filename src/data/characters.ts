import { buildCharacters } from "./characters/helpers/buildCharacters";
import { charactersRegistry } from "./characters.registry";

export const allCharacters = buildCharacters(charactersRegistry);
