import { useEffect, useState } from "react";
import { timeService } from "./TimeService";
import { Time } from "./consts";

export const useCountdown = (targetTime: number) => {
  const [, force] = useState(0);

  useEffect(() => {
    const unsubscribe = timeService.subscribe(() => force((x) => x + 1));
    return unsubscribe;
  }, []);

  const now = timeService.getNow();

  const diff = Math.max(targetTime - now, 0);

  const hours = Math.floor(diff / Time.HOUR);
  const minutes = Math.floor((diff % Time.HOUR) / Time.MINUTE);
  const seconds = Math.floor((diff % Time.MINUTE) / Time.SECOND);

  return {
    hours,
    minutes,
    seconds,
    isReady: diff === 0,
  };
};
