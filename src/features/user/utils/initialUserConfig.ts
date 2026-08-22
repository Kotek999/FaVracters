import * as Crypto from "expo-crypto";

const randomName = () => `Player${Math.floor(100000 + Math.random() * 900000)}`;

export const createInitialUser = () => ({
  id: Crypto.randomUUID(),
  name: randomName(),
  level: 1,
  xp: 0,
  cases: {
    movie: {
      all: 0,
      autobots: 0,
      decepticons: 0,
    },
    game: {
      all: 0,
      heroes: 0,
      monsters: 0,
    },
  },
  pendingCases: 0,
  energy: 0,
  dailyRewardAt: Date.now(),
  loginStreakDay: 0,
  lastLoginAt: 0,
  loginRewardAvailable: false,
  dailyEpicReward: null,
  activities: [],
});
