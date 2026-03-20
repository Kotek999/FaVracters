export const LOGIN_REWARDS = [
  { day: 1, cases: 1, energy: 5 },
  { day: 2, cases: 1, energy: 5 },
  { day: 3, cases: 2, energy: 10 },
  { day: 4, cases: 2, energy: 10 },
  { day: 5, cases: 3, energy: 15 },
  { day: 6, cases: 4, energy: 15 },
  { day: 7, rarity: "epic", energy: 20 },
] as const;

export const LOGIN_DAYS: number = LOGIN_REWARDS.length;
