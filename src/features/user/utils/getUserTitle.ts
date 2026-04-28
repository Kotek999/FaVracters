const LEVEL_TITLES: Record<number, string> = {
  5: "Zaradny",
  10: "Doświadczony",
  15: "Weteran",
  20: "Strateg",
  25: "Mistrz Taktyki",
  30: "Legendarny Dowódca",
  35: "Arcymistrz Wojny",
  40: "Niszczyciel Światów",
  45: "Mit",
  50: "Bóg Areny",
};

export const getUserTitle = (level: number) => {
  for (let lvl = level; lvl >= 1; lvl--) {
    if (LEVEL_TITLES[lvl]) return LEVEL_TITLES[lvl];
  }
  return "Nowicjusz";
};
