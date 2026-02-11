import { useCallback, useRef, useState } from "react";
import { BASE_LEGENDARY_CHANCE, MAX_BOOST } from "../consts";
import { CaseItem, Rarity } from "../types";

export function usePitySystem() {
  const spins = useRef<number>(0);

  const [pityChance, setPityChance] = useState<number>(0);

  const getRarity = useCallback((): Rarity => {
    const boost = Math.min(MAX_BOOST, Math.pow(spins.current, 1.5) * 0.002);

    setPityChance(boost);

    const roll = Math.random();
    const chance = BASE_LEGENDARY_CHANCE + boost;

    if (roll < chance) return "legendary";
    if (roll < chance + 0.09) return "epic";
    if (roll < chance + 0.39) return "rare";

    return "common";
  }, []);

  const registerWin = useCallback((item: CaseItem) => {
    if (item.rarity === "legendary") {
      spins.current = 0;
      setPityChance(0);
    } else {
      spins.current += 1;
    }
  }, []);

  return {
    pityChance,
    getRarity,
    registerWin,
  } as const;
}
