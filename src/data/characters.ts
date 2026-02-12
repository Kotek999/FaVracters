import type { CaseItem } from "@/features/caseOpening";

const img = (seed: string) =>
  `https://api.dicebear.com/7.x/adventurer/png?seed=${seed}`;

export const characters: CaseItem[] = [
  {
    id: "c1",
    name: "Scout",
    rarity: "common",
    image: img("Scout"),
  },
  {
    id: "c2",
    name: "Grunt",
    rarity: "common",
    image: img("Grunt"),
  },
  {
    id: "c3",
    name: "Rookie",
    rarity: "common",
    image: img("Rookie"),
  },
  {
    id: "c4",
    name: "Tech",
    rarity: "common",
    image: img("Tech"),
  },

  {
    id: "r1",
    name: "Sniper",
    rarity: "rare",
    image: img("Sniper"),
  },
  {
    id: "r2",
    name: "Medic",
    rarity: "rare",
    image: img("Medic"),
  },
  {
    id: "r3",
    name: "Engineer",
    rarity: "rare",
    image: img("Engineer"),
  },

  {
    id: "e1",
    name: "Assassin",
    rarity: "epic",
    image: img("Assassin"),
  },
  {
    id: "e2",
    name: "Cyber Ninja",
    rarity: "epic",
    image: img("CyberNinja"),
  },

  {
    id: "l1",
    name: "Shadow Lord",
    rarity: "legendary",
    image: img("ShadowLord"),
  },
];
