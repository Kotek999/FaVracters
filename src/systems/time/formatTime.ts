export const formatTime = (hours: number, minutes: number, seconds: number) => {
  const pad = (v: number) => String(v).padStart(2, "0");

  return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
};
