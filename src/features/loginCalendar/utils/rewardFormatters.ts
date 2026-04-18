export const rewardFormatters = {
  casesEnergy: (r: { cases: number; energy: number }) =>
    `Otrzymano ${r.cases} skrzynki i ${r.energy} energii`,

  rarity: (_: { rarity: true }) => "Epicki bohater",
} as const;
