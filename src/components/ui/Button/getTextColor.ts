import { colors } from "@/theme/colors";
import { Variant } from "../types";

export const getTextColor = (variant: Variant): string => {
  if (variant === "outline") return colors.primary;
  return colors.white;
};
