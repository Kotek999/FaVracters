import { TimerProps } from "../types";

export const getTimerValues = ({ hours, minutes, seconds }: TimerProps) => [
  {
    title: "godz",
    value: hours,
  },
  {
    title: "min",
    value: minutes,
  },
  {
    title: "sek",
    value: seconds,
  },
];
