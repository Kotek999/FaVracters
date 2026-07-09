import { Time } from "@/systems/time/consts";

export const formatNumberShort = (num: number): string => {
  if (num < Time.SECOND) return num.toString();

  const value = num / Time.SECOND;
  const formatted =
    value % 1 === 0 ? value.toString() : value.toFixed(1).replace(/\.0$/, "");

  return `${formatted}k`;
};
