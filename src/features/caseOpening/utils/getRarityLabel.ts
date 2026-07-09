import { rarityLabels } from "../consts";
import { RarityLabel } from "../types";

export const getRarityLabel = (
  rarity: RarityLabel,
  form: keyof (typeof rarityLabels)[RarityLabel] = "base",
) => {
  return rarityLabels[rarity][form];
};
