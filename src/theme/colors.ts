export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  blank: "transparent",
  primary: "#0cfdfd",
  backgroundPrimary: "#142c2c",
  borderPrimary: "#1e4e4e",
  textGray: "#90cbcb",
  textLightGray: "#9dbbbb",
  textDark: "#102323",
  textLightLime: "#62f8ad",
  backgroundDark: "#102222",
  backgroundNavDarkGreen: "#1f3f3fb9",
  backgroundDarkGreen: "#166161",
  backgroundBrown: "#ff91002d",
  backgroundLightGreen: "#22c55e",
  backgroundRed: "#ef4444",
  backgroundBlur: "#073131",
  opacityDark: "rgba(0,0,0,0.8)",
  common: "#a0a0a0",
  rare: "#7dddee",
  epic: "#a855f7",
  legendary: "#f8c51f",
  disabled: "#ccc",
  shadow: "#090a0a",
} as const;

export type Color = (typeof colors)[keyof typeof colors];
export type ColorName = keyof typeof colors;
