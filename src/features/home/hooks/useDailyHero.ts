import { router } from "expo-router";
import { dailyHeroItem } from "../utils/dailyHeroItem";
import { useCollectionStore } from "@/features/collection/store/useCollectionStore";

export const useDailyHero = () => {
  const { useIsOwned } = useCollectionStore();
  const isHeroOwned = useIsOwned(dailyHeroItem.id);

  const onPressGoToScreen = () => {
    if (isHeroOwned) {
      router.push({
        pathname: `/card/${dailyHeroItem.id}`,
      });
    } else {
      router.push({
        pathname: "/case",
      });
    }
  };

  const dailyHeroConfig = isHeroOwned
    ? {
        label: dailyHeroItem.name,
        buttonLabel: "Szczegóły",
        icon: "location-enter",
      }
    : {
        label: "Nieznany bohater",
        buttonLabel: "Szybkie odkrycie",
        icon: "lightning-bolt",
      };

  return {
    onPressGoToScreen,
    dailyHeroConfig,
    isHeroOwned,
  };
};
