import { buildCharacters } from "../helpers/buildCharacters";
import { autobots } from "./autobots/autobots";
import { decepticons } from "./decepticons/decepticons";
import { transformersRegistry } from "./registry";

const all = buildCharacters(transformersRegistry);

export const transformersCollections = {
  all,
  autobots: buildCharacters(autobots),
  decepticons: buildCharacters(decepticons),
} as const;

export const transformers = transformersCollections.all;
