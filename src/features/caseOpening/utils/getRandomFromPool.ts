import { getRandomIndex } from "./getRandomIndex";

export const getRandomFromPool = <T>(arr: readonly T[]) => {
  if (arr.length === 0) return undefined;

  return arr[getRandomIndex(arr)];
};
