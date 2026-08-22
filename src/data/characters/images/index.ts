import { ImageSourcePropType } from "react-native";

import { transformersImages } from "@/assets/images/characters/transformers";
import { heroesImages } from "@/assets/images/characters/witcher/heroes";
import { monstersImages } from "@/assets/images/characters/witcher/monsters";

export const characterImages = {
  ...transformersImages,
  ...heroesImages,
  ...monstersImages,
} as const satisfies Record<string, ImageSourcePropType>;

export type CharacterKey = keyof typeof characterImages;
