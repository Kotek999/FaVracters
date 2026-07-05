export const getRandomIndex = <T>(arr: readonly T[]) =>
  Math.floor(Math.random() * arr.length);
