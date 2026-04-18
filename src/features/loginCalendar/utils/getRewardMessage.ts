import { LoginReward } from "@/features/user/types";
import { getRewardKey } from "./getRewardKey";
import { rewardFormatters } from "./rewardFormatters";

export const getRewardMessage = (reward: LoginReward | null) => {
  if (!reward) return null;

  const key = getRewardKey(reward);
  if (!key) return null;

  return rewardFormatters[key](reward as never);
};
