import { colors } from "@/theme/colors";
import { RarityConfig } from "../types";

export const RARITY_CONFIG: RarityConfig = {
  common: {
    chance: 60,
    priority: 1,
    opacity: 0.55,
    color: colors.common,
  },

  rare: {
    chance: 30,
    priority: 2,
    opacity: 0.75,
    color: colors.rare,
  },

  epic: {
    chance: 9,
    priority: 3,
    opacity: 1,
    color: colors.epic,
  },

  legendary: {
    chance: 1,
    priority: 4,
    opacity: 1,
    color: colors.legendary,
  },
};
