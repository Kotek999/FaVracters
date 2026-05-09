import { colors } from "@/theme/colors";
import { RarityItem } from "../types";

export const RARITIES_DATA: RarityItem[] = [
  {
    key: "common",
    label: "Zwykły",
    chance: 60,
    dotColor: colors.common,
  },
  {
    key: "rare",
    label: "Rzadki",
    chance: 30,
    dotColor: colors.rare,
  },
  {
    key: "epic",
    label: "Epicki",
    chance: 9,
    dotColor: colors.epic,
  },
  {
    key: "legendary",
    label: "Legendarny",
    chance: 1,
    dotColor: colors.legendary,
  },
];
