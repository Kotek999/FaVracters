import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableDetailsBadgeProps } from "@/features/collection/types";
import { screenHeight, screenWidth } from "@/utils/dimensions";

export const TouchableDetailsBadge = ({
  onPress,
}: TouchableDetailsBadgeProps) => {
  return (
    <TouchableOpacity style={styles.badgeContainer} onPress={onPress}>
      <MaterialCommunityIcons
        name="shield-account"
        size={16}
        color={colors.secondary}
      />
      <Text style={styles.badgeText}>Szczegóły</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    width: screenWidth / 4,
    height: screenHeight / 26,
    top: 8,
    left: 8,
    backgroundColor: colors.backgroundDarkBlue,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    gap: 4,
  },
  badgeText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontFamily: fonts.bold,
  },
});
