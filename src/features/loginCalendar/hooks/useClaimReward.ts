import { useEffect } from "react";
import { useUserStore } from "@/features/user/store/useUserStore";
import { collectionStore } from "@/features/collection/store/collectionStore";
import { getEpicHeroReward } from "../utils/getEpicHeroReward";
import { getRewardMessage } from "../utils/getRewardMessage";
import { showToastMessageInfo } from "@/components/ui/utils/showToastMessageInfo";

export const useClaimReward = () => {
  const {
    dailyEpicReward,
    claimLoginReward,
    checkLogin,
    rollDailyEpicReward,
    clearDailyEpicReward,
  } = useUserStore();

  useEffect(() => {
    checkLogin();
    rollDailyEpicReward();
  }, []);

  const onPressClaimDayReward = () => {
    const reward = claimLoginReward();
    const message = getRewardMessage(reward);

    if (!message) return;
    showToastMessageInfo("Nagroda logowania", message);
  };

  const onPressClaimDayEpicReward = () => {
    if (!dailyEpicReward) return;
    const hero = getEpicHeroReward(dailyEpicReward);

    if (!hero) return;
    collectionStore.getState().addDuplicate(hero.id, hero.rarity);

    showToastMessageInfo("Wielka Nagroda!", `Otrzymano ${hero.name}`);
    clearDailyEpicReward();
  };

  return { onPressClaimDayReward, onPressClaimDayEpicReward };
};
