import { useMemo } from "react";
import { getStatTiers } from "@/features/heroCardDetails/utils/getStatsTiers";
import { getHeroStatsConfig } from "@/features/heroCardDetails/utils/getHeroStatsConfig";
import { STAT_TIERS } from "@/features/heroCardDetails/consts";
import { CharacterStatsProp as CardStatsProps } from "../types";

export const useCardStats = ({ cardStats }: CardStatsProps) => {
  const statTiers = useMemo(
    () => getStatTiers(cardStats, STAT_TIERS),
    [cardStats.power, cardStats.defense, cardStats.intelligence],
  );

  const characterStats = getHeroStatsConfig({ cardStats, statTiers });

  return {
    characterStats,
  };
};
