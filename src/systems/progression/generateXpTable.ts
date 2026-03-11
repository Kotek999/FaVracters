export const generateXpTable = (
  maxLevel: number,
  base: number,
  growth: number,
  scale: number = 1,
) => {
  const table: number[] = [0];

  for (let lvl = 1; lvl <= maxLevel; lvl++) {
    const xp = base + lvl * lvl * growth;

    table[lvl] = Math.round(xp * scale);
  }

  return table;
};
