import { Tier } from "../types";

export function getTier<T>(value: number, tiers: readonly Tier<T>[]) {
  if (!tiers.length) {
    throw new Error("getTier requires at least one tier");
  }

  for (let i = 0; i < tiers.length; i++) {
    const tier = tiers[i];

    if (value >= tier.min && value <= tier.max) {
      return tier.data;
    }
  }

  return tiers[0].data;
}
