import { EPIC_POOL } from "@/systems/progression/loginRewards";

export const getRandomEpicReward = () => {
  const index = Math.floor(Math.random() * EPIC_POOL.length);
  return EPIC_POOL[index];
};
