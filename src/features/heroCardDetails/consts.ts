import { StatTiersData, RatingTiersData } from "./types";

export const MAX_STAT = 100;

export const STAT_TIERS: StatTiersData = [
  {
    min: 0,
    max: 12,
    data: {
      progressColors: ["#8f2626", "#be1c1c"],
    },
  },

  {
    min: 13,
    max: 25,
    data: {
      progressColors: ["#b91c1c", "#ef4444"],
    },
  },

  {
    min: 26,
    max: 38,
    data: {
      progressColors: ["#b6421b", "#eb8a63"],
    },
  },

  {
    min: 39,
    max: 50,
    data: {
      progressColors: ["#ea580c", "#fd9f51"],
    },
  },

  {
    min: 51,
    max: 63,
    data: {
      progressColors: ["#b96f1b", "#f0bc4c"],
    },
  },

  {
    min: 64,
    max: 75,
    data: {
      progressColors: ["#e0ae15", "#f7dd5d"],
    },
  },

  {
    min: 76,
    max: 88,
    data: {
      progressColors: ["#186336", "#16d15b"],
    },
  },

  {
    min: 89,
    max: 100,
    data: {
      progressColors: ["#237443", "#0bf360"],
    },
  },
] as const;

export const RATING_TIERS: RatingTiersData = [
  {
    min: 0,
    max: 1.2,
    data: {
      color: "#bb3535",
    },
  },
  {
    min: 1.3,
    max: 2.5,
    data: {
      color: "#dc2626",
    },
  },
  {
    min: 2.6,
    max: 3.8,
    data: {
      color: "#d14618",
    },
  },
  {
    min: 3.9,
    max: 5.0,
    data: {
      color: "#f97316",
    },
  },
  {
    min: 5.1,
    max: 6.3,
    data: {
      color: "#d38211",
    },
  },
  {
    min: 6.4,
    max: 7.5,

    data: {
      color: "#facc15",
    },
  },
  {
    min: 7.6,
    max: 8.8,
    data: {
      color: "#18a34d",
    },
  },
  {
    min: 8.9,
    max: 10,
    data: {
      color: "#3adf76",
    },
  },
] as const;
