import { useCallback } from "react";
import { ImageSourcePropType } from "react-native";
import { useCollectionStore } from "@/store/hooks/useCollectionStore";
import { getXpNeeded, MAX_LEVEL } from "@/store/collection/xpSystem";
import type { CardItemProps } from "../types";

export const useCardItemLevel = ({ item }: CardItemProps) => {
  const lockedImage: ImageSourcePropType = require("@/assets/images/image_example_1.png");

  const useCardProgress = (id: string) =>
    useCollectionStore(useCallback((state) => state.items[id], [id]));

  const progress = useCardProgress(item.id);
  const levelUp = useCollectionStore((state) => state.levelUp);

  const level = progress?.level ?? 1;
  const xp = progress?.xp ?? 0;
  const isUnlocked: boolean = !!progress;
  const xpNeeded = isUnlocked ? getXpNeeded(item.rarity, level) : 0;
  const imageSource = isUnlocked ? { uri: item.image } : lockedImage;
  const canLevelUp = isUnlocked && xp >= xpNeeded && level < MAX_LEVEL;

  const handleLevelUp = useCallback(() => {
    if (!canLevelUp) return;

    levelUp(item.id, item.rarity);
  }, [canLevelUp, item.id, item.rarity]);

  return {
    progress,
    imageSource,
    level,
    xp,
    xpNeeded,
    handleLevelUp,
    canLevelUp,
  };
};
