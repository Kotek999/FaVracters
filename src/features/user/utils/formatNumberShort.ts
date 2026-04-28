export const formatNumberShort = (num: number): string => {
  if (num < 1000) return num.toString();

  const value = num / 1000;
  const formatted =
    value % 1 === 0 ? value.toString() : value.toFixed(1).replace(/\.0$/, "");

  return `${formatted}k`;
};
