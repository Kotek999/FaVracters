import { witcherCollections } from "../characters/witcher";

export const gamePool = {
  all: witcherCollections.all,
  heroes: witcherCollections.heroes,
  monsters: witcherCollections.monsters,
} as const;
