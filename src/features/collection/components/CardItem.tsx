import { memo } from "react";
import { NavigationActions } from "@/navigation";
import { useCardItemLevel } from "../hooks/useCardItemLevel";
import { CardLockedItem } from "./cardLocked/CardLockedItem";
import { CardUnlockedItem } from "./cardUnlocked/CardUnlockedItem";
import { CardItemProps } from "../types";

export const CardItem = memo(({ item }: CardItemProps) => {
  const { progress, imageSource, level, xp, xpNeeded, onLevelUp, canLevelUp } =
    useCardItemLevel({ item: item });

  return (
    <>
      {progress ? (
        <CardUnlockedItem
          item={item}
          imageSource={imageSource}
          xp={xp}
          xpNeeded={xpNeeded}
          cardLevel={level}
          canLevelUp={canLevelUp}
          onLevelUp={onLevelUp}
          onPress={() => NavigationActions.openHeroCard(item.id)}
        />
      ) : (
        <CardLockedItem imageSource={imageSource} cardRarity={item.rarity} />
      )}
    </>
  );
});

export const RenderCardItem = memo(
  CardItem,
  (prev, next) =>
    prev.item.id === next.item.id && prev.item.rarity === next.item.rarity,
);
