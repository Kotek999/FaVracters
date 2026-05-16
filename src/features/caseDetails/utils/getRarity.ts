import { Rarity } from "@/features/caseOpening";
import { RARITY_CONFIG } from "../data/rarityConfig";

export const getRarity = (rarity: Rarity) => RARITY_CONFIG[rarity];
