import { View, Text, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { getTier } from "@/features/heroCardDetails/utils/getTier";
import { RATING_TIERS } from "@/features/heroCardDetails/consts";
import { RatingBadgeProps } from "@/features/heroCardDetails/types";

export const RatingBadge = ({ cardRating }: RatingBadgeProps) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{cardRating.toFixed(1)}</Text>
      <FontAwesome6
        name="hand-fist"
        size={18}
        color={getTier(cardRating, RATING_TIERS).color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    alignSelf: "center",
    position: "absolute",
    top: -20,
    width: 100,
    height: 50,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    gap: 8,
  },
  badgeText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.white,
    textTransform: "uppercase",
    textShadowColor: colors.opacityDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});
