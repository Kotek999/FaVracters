import { IconProps } from "@ui-kitten/components";
import { Activity } from "@/features/user/types";
import { ActivityByType } from "../types";

export function createActivityConfig<
  T extends {
    [K in Activity["type"]]: {
      title: (p: ActivityByType[K]) => string;
      description: (p: ActivityByType[K]) => string;
      backgroundColor: string;
      icon: (p: ActivityByType[K]) => IconProps;
    };
  },
>(config: T) {
  return config;
}
