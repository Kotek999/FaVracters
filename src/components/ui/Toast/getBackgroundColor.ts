import { colors } from "@/theme/colors";
import { ToastType } from "../types";

export const getBackgroundColor = (variant: ToastType) => {
  switch (variant) {
    case "success":
      return colors.backgroundLightGreen;
    case "error":
      return colors.backgroundRed;
    case "info":
    default:
      return colors.backgroundDarkGreen;
  }
};
