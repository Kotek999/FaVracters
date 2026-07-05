import { useMemo, useState } from "react";
import { collectionStore } from "../store/collectionStore";
import { Character } from "@/features/caseOpening";
import { FilterMode, Filter } from "../types";

export const useCollectionFilters = (data: Character[]) => {
  const items = collectionStore((state) => state.items);
  const [filterMode, setFilterMode] = useState<FilterMode>(Filter.ALL);

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
