import { STRIP_LENGTH, WINNER_INDEX } from "../consts";
import type { CaseItem } from "../types";

export const generateStrip = (
  items: readonly CaseItem[],
  winner: CaseItem,
  legendaryPool: CaseItem[],
) => {
  const strip = Array.from(
    { length: STRIP_LENGTH },
    () => items[Math.floor(Math.random() * items.length)],
  );

  strip[WINNER_INDEX] = winner;

  if (winner.rarity !== "legendary" && Math.random() < 0.25) {
    const nearIndex = Math.random() < 0.5 ? WINNER_INDEX - 1 : WINNER_INDEX + 1;

    if (strip[nearIndex]) {
      strip[nearIndex] =
        legendaryPool[Math.floor(Math.random() * legendaryPool.length)];
    }
  }

  return { strip, winnerIndex: WINNER_INDEX };
};
