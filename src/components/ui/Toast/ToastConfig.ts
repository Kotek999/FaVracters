import { colors } from "@/theme/colors";
import { ToastVariantsConfig } from "../types";

export const TOAST_VARIANTS = {
  success: {
    icon: "check-circle",
    iconColor: colors.backgroundLime,
    borderColor: colors.backgroundLime,
  },
  error: {
    icon: "close-circle",
    iconColor: colors.backgroundRed,
    borderColor: colors.backgroundRed,
  },
  info: {
    icon: "information",
    iconColor: colors.secondary,
    borderColor: colors.secondary,
  },
} as const satisfies Record<string, ToastVariantsConfig>;
