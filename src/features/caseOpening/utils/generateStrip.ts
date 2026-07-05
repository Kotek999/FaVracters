import { STRIP_LENGTH, WINNER_INDEX } from "../consts";
import { getRandomIndex } from "./getRandomIndex";
import { Character, RARITY } from "../types";

export const generateStrip = (
  items: readonly Character[],
  winner: Character,
  legendaryPool: Character[],
) => {
  const strip = Array.from(
    { length: STRIP_LENGTH },
    () => items[getRandomIndex(items)],
  );

  strip[WINNER_INDEX] = winner;

  if (
    winner.rarity !== RARITY.LEGENDARY &&
    legendaryPool.length > 0 &&
    Math.random() < 0.25
  ) {
    const nearIndex = Math.random() < 0.5 ? WINNER_INDEX - 1 : WINNER_INDEX + 1;

    if (strip[nearIndex]) {
      strip[nearIndex] =
        legendaryPool[Math.floor(Math.random() * legendaryPool.length)];
    }
  }

  return {
    strip,
    winnerIndex: WINNER_INDEX,
  };
};
