import { useCallback, useRef, useState } from "react";
import { BASE_LEGENDARY_CHANCE, MAX_BOOST } from "../consts";
import { Character, Rarity, RARITY } from "../types";

export function usePitySystem() {
  const spins = useRef<number>(0);

  const [pityChance, setPityChance] = useState<number>(0);

  const getRarity = useCallback((): Rarity => {
    const boost = Math.min(MAX_BOOST, Math.pow(spins.current, 1.5) * 0.002);

    setPityChance(boost);

    const roll = Math.random();
    const chance = BASE_LEGENDARY_CHANCE + boost;

    if (roll < chance) return RARITY.LEGENDARY;
    if (roll < chance + 0.09) return RARITY.EPIC;
    if (roll < chance + 0.39) return RARITY.RARE;

    return RARITY.COMMON;
  }, []);

  const registerWin = useCallback((item: Character) => {
    if (item.rarity === RARITY.LEGENDARY) {
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
