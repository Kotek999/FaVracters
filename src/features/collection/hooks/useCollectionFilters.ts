import { useMemo, useState } from "react";
import { collectionStore } from "../store/collectionStore";
import { CharacterWithRating } from "@/types/character.types";
import { FilterMode, Filter } from "../types";

export const useCollectionFilters = (data: CharacterWithRating[]) => {
  const items = collectionStore((state) => state.items);
  const [filterMode, setFilterMode] = useState<FilterMode>(Filter.OWNED);

  const filteredData = useMemo(() => {
    if (!data?.length) return [];

    switch (filterMode) {
      case Filter.OWNED:
        return data.filter((item) => items[item.id] !== undefined);

      case Filter.MISSING:
        return data.filter((item) => items[item.id] === undefined);

      default:
        return data;
    }
  }, [data, items, filterMode]);

  return {
    filterMode,
    setFilterMode,
    filteredData,
  };
};
