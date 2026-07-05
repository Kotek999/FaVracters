import { Tier } from "../types";

export const getStatTiers = <
  TStats extends Record<keyof TStats, number>,
  TData,
>(
  stats: TStats,
  tiers: readonly Tier<TData>[],
) => {
  const result = {} as Record<keyof TStats, TData>;

  (Object.keys(stats) as (keyof TStats)[]).forEach((key) => {
    const value = stats[key];

    for (let i = 0; i < tiers.length; i++) {
      const tier = tiers[i];

      if (value >= tier.min && value <= tier.max) {
        result[key] = tier.data;
        break;
      }
    }
  });

  return result;
};
