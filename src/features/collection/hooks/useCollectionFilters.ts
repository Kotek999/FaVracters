import { useCallback, useMemo, useRef, useState } from "react";
import { Animated } from "react-native";
import { useCollectionStore } from "@/store/hooks/useCollectionStore";
import { CaseItem } from "@/features/caseOpening";

type FilterMode = "all" | "owned" | "missing";

enum Filter {
  ALL = "all",
  OWNED = "owned",
  MISSING = "missing",
}

export const useCollectionFilters = (data: CaseItem[]) => {
  const items = useCollectionStore((s) => s.items);

  const [filterMode, setFilterMode] = useState<FilterMode>(Filter.ALL);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(-120)).current;

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const closeSearch = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: -120,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setIsSearchOpen(false));
  }, [slideAnim]);

  const normalizedQuery = useMemo(
    () => searchQuery.trim().toLowerCase(),
    [searchQuery],
  );

  const filteredData = useMemo(() => {
    if (!data?.length) return [];

    let result = data;

    if (filterMode === Filter.OWNED) {
      result = result.filter((item) => items[item.id] > 0);
    } else if (filterMode === Filter.MISSING) {
      result = result.filter((item) => !items[item.id]);
    }

    if (normalizedQuery) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(normalizedQuery),
      );
    }

    return result.map((item) => ({
      ...item,
      count: items[item.id] ?? 0,
      isUnlocked: !!items[item.id],
    }));
  }, [data, items, filterMode, normalizedQuery]);

  return {
    filterMode,
    setFilterMode,
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    openSearch,
    closeSearch,
    slideAnim,
    filteredData,
  };
};
