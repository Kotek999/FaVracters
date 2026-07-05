import { rarityColor } from "@/features/caseOpening/consts";
import { colors } from "@/theme/colors";
import { getRarityLabel } from "@/features/caseOpening/utils/getRarityLabel";
import { HeroInfoConfigProps } from "../types";

export const getHeroInfoConfig = ({
  cardClass,
  cardRarity,
  cardOrigin,
  cardFaction,
}: HeroInfoConfigProps) => [
  {
    icon: "auto-fix",
    value: cardClass,
    color: colors.textLightLime,
  },

  {
    icon: "medal",
    value: getRarityLabel(cardRarity),
    color: rarityColor[cardRarity],
  },

  {
    icon: "earth",
    value: cardOrigin,
    color: colors.secondary,
  },

  {
    icon: "arrow-projectile-multiple",
    value: cardFaction,
    color: "#b0e966",
  },
];
