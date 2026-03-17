import { userStore } from "./userStore";

export const useUserStore = () => {
  const lastLoginAt = userStore((state) => state.lastLoginAt);
  const loginStreakDay = userStore((state) => state.loginStreakDay);
  const rewardAvailable = userStore((state) => state.loginRewardAvailable);
  const dailyRewardAt = userStore((state) => state.dailyRewardAt);
  const cases = userStore((state) => state.cases);
  const userName = userStore((state) => state.name);
  const pendingCases = userStore((state) => state.pendingCases);
  const level = userStore((state) => state.level);
  const xp = userStore((state) => state.xp);
  const activities = userStore((state) => state.activities);

  const claimDailyReward = userStore((state) => state.claimDailyReward);
  const claimLoginReward = userStore((state) => state.claimLoginStreakReward);
  const claimCases = userStore((state) => state.claimCases);
  const checkLogin = userStore((state) => state.checkLoginStreak);
  const useCase = userStore((state) => state.useCase);

  const clearUserStorage = userStore((state) => state.clearStorage);

  return {
    lastLoginAt,
    loginStreakDay,
    rewardAvailable,
    dailyRewardAt,
    cases,
    userName,
    pendingCases,
    level,
    xp,
    activities,
    claimDailyReward,
    claimLoginReward,
    claimCases,
    checkLogin,
    useCase,
    clearUserStorage,
  };
};
