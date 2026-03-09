import { useMemo, useState } from "react";
import { useCollectionStore } from "@/store/hooks/useCollectionStore";
import type { CaseItem } from "@/features/caseOpening";
import type { FilterMode } from "../types";

enum Filter {
  ALL = "all",
  OWNED = "owned",
  MISSING = "missing",
}

export const useCollectionFilters = (data: CaseItem[]) => {
  const items = useCollectionStore((s) => s.items);
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
