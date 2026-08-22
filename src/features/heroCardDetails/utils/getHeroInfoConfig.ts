import { rarityColor } from "@/features/caseOpening/consts";
import { colors } from "@/theme/colors";
import { getRarityLabel } from "@/features/caseOpening/utils/getRarityLabel";
import { HeroInfoConfigProps } from "../types";

export const getHeroInfoConfig = ({
  cardRole,
  cardRarity,
  cardUniverse,
  cardRace,
}: HeroInfoConfigProps) => [
  {
    icon: "auto-fix",
    value: cardRole,
    color: colors.textLightLime,
  },
  {
    icon: "medal",
    value: getRarityLabel(cardRarity),
    color: rarityColor[cardRarity],
  },
  {
    icon: "earth",
    value: cardUniverse,
    color: colors.secondary,
  },
  {
    icon: "arrow-projectile-multiple",
    value: cardRace,
    color: colors.textLightLime,
  },
];
