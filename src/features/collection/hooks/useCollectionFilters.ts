import { useMemo, useState } from "react";
import { useCollectionStore } from "@/store/hooks/useCollectionStore";
import type { CaseItem } from "@/features/caseOpening";

type FilterMode = "all" | "owned" | "missing";

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

    let result = data;

    if (filterMode === Filter.OWNED) {
      result = result.filter((item) => items[item.id] > 0);
    } else if (filterMode === Filter.MISSING) {
      result = result.filter((item) => !items[item.id]);
    }

    return result.map((item) => ({
      ...item,
      count: items[item.id] ?? 0,
      isUnlocked: !!items[item.id],
    }));
  }, [data, items, filterMode]);

  return {
    filterMode,
    setFilterMode,
    filteredData,
  };
};
