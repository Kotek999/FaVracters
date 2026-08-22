import { useCallback } from "react";
import { Images } from "@/assets/images";
import { getCardXpNeeded, MAX_CARD_LEVEL } from "@/systems/progression/cardXp";
import { useCollectionStore } from "../store/useCollectionStore";
import { useCardProgress } from "./useCardProgress";
import { CardItemProps } from "../types";

export const useCardItemLevel = ({ item }: CardItemProps) => {
  const { levelUp } = useCollectionStore();
  const { progress } = useCardProgress({ cardId: item.id });

  const level = progress?.level ?? 1;
  const xp = progress?.xp ?? 0;
  const isUnlocked: boolean = !!progress;
  const xpNeeded = isUnlocked ? getCardXpNeeded(item.rarity, level) : 0;
  const imageSource = isUnlocked ? item.image : Images.unknownHero;
  const canLevelUp = isUnlocked && xp >= xpNeeded && level < MAX_CARD_LEVEL;

  const onLevelUp = useCallback(() => {
    if (!canLevelUp) return;

    levelUp(item.id, item.rarity);
  }, [canLevelUp, item.id, item.rarity]);

  return {
    progress,
    imageSource,
    level,
    xp,
    xpNeeded,
    onLevelUp,
    canLevelUp,
  };
};
