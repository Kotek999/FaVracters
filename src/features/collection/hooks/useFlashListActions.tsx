import { useCallback } from "react";
import { RenderCardItem } from "@/features/collection/components/CardItem";
import type { CaseItem } from "@/features/caseOpening";
import type { CardItemProps } from "@/features/collection/types";

export const useFlashListActions = () => {
  const renderItem = useCallback(({ item }: CardItemProps) => {
    return <RenderCardItem item={item} />;
  }, []);

  const keyExtractor = useCallback((item: CaseItem) => item.id, []);

  return { renderItem, keyExtractor };
};
