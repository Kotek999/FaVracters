export const PLAYER_LEVEL_REWARDS: Record<number, number> = {
  2: 1,
  4: 1,
  6: 1,
  8: 2,
  10: 2,
  15: 3,
  20: 3,
  25: 4,
  30: 4,
  35: 5,
  40: 6,
  45: 7,
  50: 10,
};

export const getRewardCases = (level: number) =>
  PLAYER_LEVEL_REWARDS[level] ?? 0;
