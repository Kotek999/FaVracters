import { useCollectionStore } from "../store/useCollectionStore";
import { CardProgressProps } from "../types";

export const useCardProgress = ({ cardId }: CardProgressProps) => {
  const { getCardProgress } = useCollectionStore();

  const progress = getCardProgress(cardId);

  return {
    progress,
  };
};
