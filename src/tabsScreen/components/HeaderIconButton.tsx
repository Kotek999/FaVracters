import { useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useUserStore } from "@/features/user/store/useUserStore";
import { colors } from "@/theme/colors";
import { HeaderIconButtonProps } from "../types";

export const HeaderIconButton = ({
  icon,
  onPress,
  style,
  showBadge = false,
}: HeaderIconButtonProps) => {
  const { checkLogin, rewardAvailable } = useUserStore();

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <TouchableOpacity
      style={[styles.baseButton, styles.squareButton, style]}
      onPress={onPress}
    >
      {icon}
      {rewardAvailable && showBadge && <View style={styles.badge} />}
    </TouchableOpacity>
  );
};

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
  badge: {
    position: "absolute",
    top: -4,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.backgroundRed,
  },
});
