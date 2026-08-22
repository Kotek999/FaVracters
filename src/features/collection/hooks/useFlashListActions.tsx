import { useCallback } from "react";
import { RenderCardItem } from "@/features/collection/components/CardItem";
import { Character } from "@/types/character.types";
import type { CardItemProps } from "@/features/collection/types";

export const useFlashListActions = () => {
  const renderItem = useCallback(({ item }: CardItemProps) => {
    return <RenderCardItem item={item} />;
  }, []);

  const keyExtractor = useCallback((item: Character) => item.id, []);

  return { renderItem, keyExtractor };
};
