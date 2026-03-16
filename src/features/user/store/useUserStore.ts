import { userStore } from "./userStore";

export const useUserStore = () => {
  const lastLoginAt = userStore((state) => state.lastLoginAt);
  const loginStreakDay = userStore((state) => state.loginStreakDay);
  const rewardAvailable = userStore((state) => state.loginRewardAvailable);
  const dailyRewardAt = userStore((state) => state.dailyRewardAt);

  const claimDailyReward = userStore((state) => state.claimDailyReward);
  const claimLoginReward = userStore((state) => state.claimLoginStreakReward);
  const checkLogin = userStore((state) => state.checkLoginStreak);

  const clearUserStorage = userStore((state) => state.clearStorage);

  return {
    lastLoginAt,
    loginStreakDay,
    rewardAvailable,
    dailyRewardAt,
    claimDailyReward,
    claimLoginReward,
    checkLogin,
    clearUserStorage,
  };
};
