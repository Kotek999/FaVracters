import { MAX_STAT } from "../consts";
import { HeroStatsConfigProps } from "../types";

export const getHeroStatsConfig = ({
  cardStats,
  statTiers,
}: HeroStatsConfigProps) => [
  {
    title: "Siła",
    iconName: "sword-cross",
    value: cardStats.power,
    progressBar: {
      progress: cardStats.power / MAX_STAT,
      colors: statTiers.power.progressColors,
    },
  },

  {
    title: "Obrona",
    iconName: "shield-star",
    value: cardStats.defense,
    progressBar: {
      progress: cardStats.defense / MAX_STAT,
      colors: statTiers.defense.progressColors,
    },
  },

  {
    title: "Inteligencja",
    iconName: "brain",
    value: cardStats.intelligence,
    progressBar: {
      progress: cardStats.intelligence / MAX_STAT,
      colors: statTiers.intelligence.progressColors,
    },
  },
];
