import { useMemo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { RenderIconProps } from "../types";

export const renderIcon = ({ dirty, error }: RenderIconProps) => {
  const icon = useMemo(() => {
    const name = error ? "close-circle" : "check-circle";
    const color = error ? colors.error : colors.textLightLime;

    if (!dirty) return undefined;

    return () => (
      <MaterialCommunityIcons
        name={name}
        size={20}
        color={color}
        style={{ opacity: 0.9 }}
      />
    );
  }, [dirty, error]);

  return icon;
};
