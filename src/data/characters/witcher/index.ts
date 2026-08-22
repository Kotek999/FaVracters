import { buildCharacters } from "../helpers/buildCharacters";
import { heroes } from "./heroes/heroes";
import { monsters } from "./monsters/monsters";
import { witcherRegistry } from "./registry";

const all = buildCharacters(witcherRegistry);

export const witcherCollections = {
  all,
  heroes: buildCharacters(heroes),
  monsters: buildCharacters(monsters),
} as const;

export const witcher = witcherCollections.all;
