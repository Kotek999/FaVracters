import { characters } from "@/data/characters";
import { Time } from "@/systems/time/consts";

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();

  return Math.floor(diff / Time.DAY);
};

const getDailyIndex = (length: number) => {
  const seed = getDayOfYear();
  const x = Math.sin(seed) * 10000;
  const random = x - Math.floor(x);

  return Math.floor(random * length);
};

export const dailyHeroItem = characters[getDailyIndex(characters.length)];
