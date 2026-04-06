import { characters } from "@/data/characters";

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const getDailyIndex = (length: number) => {
  const seed = getDayOfYear();
  const x = Math.sin(seed) * 10000;
  const random = x - Math.floor(x);

  return Math.floor(random * length);
};

export const dailyHeroItem = characters[getDailyIndex(characters.length)];
