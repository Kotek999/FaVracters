import { CharacterBase } from "@/types/character.types";
import { autobots } from "./autobots/autobots";
import { decepticons } from "./decepticons/decepticons";

export const transformersRegistry = {
  ...autobots,
  ...decepticons,
} satisfies Record<string, CharacterBase>;
