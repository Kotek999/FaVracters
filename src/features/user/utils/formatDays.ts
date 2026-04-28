export const formatDays = (value: number) => {
  const lastDigit = value % 10;
  const lastTwoDigits = value % 100;

  if (value === 1) return `${value} dzień`;

  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
  ) {
    return `${value} dni`;
  }

  return `${value} dni`;
};
