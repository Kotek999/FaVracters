import { useCallback, useEffect, useState } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";

export const useExpandable = (duration = 250) => {
  const [expanded, setExpanded] = useState(false);
  const progress = useSharedValue(0);

  const toggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  useEffect(() => {
    progress.value = withTiming(expanded ? 1 : 0, { duration });
  }, [expanded]);

  return {
    expanded,
    progress,
    toggle,
  };
};
