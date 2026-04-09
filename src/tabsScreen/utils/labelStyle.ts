import { fonts } from "@/theme/fonts";
import { iconColor } from "./iconColor";

export const labelStyle = (focused: boolean) =>
  ({
    textAlign: "center",
    width: "100%",
    color: iconColor(focused),
    fontSize: 10,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
  }) as const;
