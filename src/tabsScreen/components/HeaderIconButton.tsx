import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { HeaderIconButtonProps } from "../types";

export const HeaderIconButton = ({
  icon,
  onPress,
  style,
}: HeaderIconButtonProps) => (
  <TouchableOpacity
    style={[styles.baseButton, styles.squareButton, style]}
    onPress={onPress}
  >
    {icon}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  baseButton: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  squareButton: {
    width: 35,
    height: 35,
    backgroundColor: colors.backgroundNavDarkGreen,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 10,
  },
});
