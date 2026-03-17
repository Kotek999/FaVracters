import { timeService } from "./TimeService";

export const timeAgo = (timestamp: number) => {
  const now = timeService.getNow();
  const diff = Math.max(now - timestamp, 0);

  const sec = Math.floor(diff / 1000);
  if (sec < 5) return "Przed chwilą";
  if (sec < 60) return `${sec}s temu`;

  const min = Math.floor(sec / 60);
  if (min === 1) return "1m temu";
  if (min < 60) return `${min}m temu`;

  const h = Math.floor(min / 60);
  if (h === 1) return "1h temu";
  if (h < 24) return `${h}h temu`;

  const d = Math.floor(h / 24);
  if (d === 1) return "1d temu";
  return `${d}d temu`;
};
