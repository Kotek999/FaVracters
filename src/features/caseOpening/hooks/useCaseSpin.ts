import { useMemo, useEffect, useRef } from "react";
import { groupByRarity } from "../utils/groupByRarity";
import { useSpin } from "./useSpin";
import { CaseSpinProps } from "../types";

export const useCaseSpin = ({
  items,
  getRarity,
  onWin,
  autoSpin,
}: CaseSpinProps) => {
  const pools = useMemo(() => groupByRarity(items), [items]);

  const { style, stage, strip, winner, spin, handleOpenAgain } = useSpin({
    items,
    pools,
    getRarity,
    onWin,
  });

  const didAutoSpin = useRef(false);

  useEffect(() => {
    if (autoSpin && !didAutoSpin.current) {
      didAutoSpin.current = true;
      spin();
    }
  }, [autoSpin, spin]);

  return {
    stage,
    strip,
    winner,
    style,
    handleOpenAgain,
  };
};
