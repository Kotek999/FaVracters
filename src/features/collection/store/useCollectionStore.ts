import { collectionStore } from "./collectionStore";

export const useCollectionStore = () => {
  const useIsOwned = (id: string) =>
    collectionStore((state) => !!state.items[id]);

  return {
    useIsOwned,
  };
};
