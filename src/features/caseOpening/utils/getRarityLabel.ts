import { rarityLabels } from "../consts";
import { RarityLabel } from "../types";

export const getRarityLabel = (rarity: RarityLabel) => rarityLabels[rarity];
