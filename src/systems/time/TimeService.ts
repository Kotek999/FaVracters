import { Time } from "./consts";

class TimeService {
  private now = Date.now();
  private lastSecond = Math.floor(this.now / Time.SECOND);

  private listeners = new Set<() => void>();

  constructor() {
    setInterval(() => {
      const current = Date.now();
      const second = Math.floor(current / Time.SECOND);

      if (second !== this.lastSecond) {
        this.lastSecond = second;
        this.now = current;

        this.listeners.forEach((l) => l());
      }
    }, Time.SECOND);
  }

  getNow() {
    return this.now;
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }
}

export const timeService = new TimeService();
