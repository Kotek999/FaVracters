import { LoginReward } from "@/features/user/types";
import { rewardFormatters } from "./rewardFormatters";

export const getRewardKey = (
  reward: LoginReward,
): keyof typeof rewardFormatters | null => {
  if ("cases" in reward && "energy" in reward) return "casesEnergy";
  if ("rarity" in reward) return "rarity";

  return null;
};
