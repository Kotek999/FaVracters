import { colors } from "@/theme/colors";
import { Variant } from "../types";

export const getBackgroundColor = (
  disabled: boolean,
  variant: Variant,
): string => {
  if (disabled) return colors.disabled;

  switch (variant) {
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.secondary;
    case "outline":
      return colors.blank;
  }
};
