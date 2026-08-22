import { transformersCollections } from "../characters/transformers";

export const moviePool = {
  all: transformersCollections.all,
  autobots: transformersCollections.autobots,
  decepticons: transformersCollections.decepticons,
} as const;
