import { useCallback } from "react";
import { collectionStore } from "./collectionStore";

export const useCollectionStore = () => {
  const ownedCardsCount = collectionStore((state) => state.ownedCardsCount);
  const highestCardRarity = collectionStore((state) => state.highestCardRarity);

  const clearCollectionStorage = collectionStore((state) => state.clearStorage);

  const useIsOwned = (id: string) =>
    collectionStore((state) => !!state.items[id]);

  const getCardProgress = (id: string) =>
    collectionStore(useCallback((state) => state.items[id], [id]));

  return {
    ownedCardsCount,
    highestCardRarity,
    clearCollectionStorage,
    useIsOwned,
    getCardProgress,
  };
};
