import { RARITY_CONFIG } from "../data/rarityConfig";
import { Rarity } from "@/types/character.types";

export const getRarity = (rarity: Rarity) => RARITY_CONFIG[rarity];
