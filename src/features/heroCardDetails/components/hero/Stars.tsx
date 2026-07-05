import { memo } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { StarsProps } from "@/features/heroCardDetails/types";

export const Stars = memo(
  ({
    stars,
    maxStars = 5,
    size = 24,
    activeColor = colors.backgroundYellow,
    inactiveColor = colors.disabled,
  }: StarsProps) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.starsContainer}>
          {[...Array(maxStars)].map((_, index) => {
            const active = index < stars;

            return (
              <MaterialCommunityIcons
                key={index}
                name="star"
                size={size}
                color={active ? activeColor : inactiveColor}
                style={active ? styles.star : undefined}
              />
            );
          })}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  starsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 160,
    height: 35,
    backgroundColor: colors.black,
    borderRadius: 16,
    opacity: 0.8,
    gap: 5,
  },
  star: {
    textShadowColor: colors.backgroundYellow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
    shadowColor: colors.backgroundYellow,
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    transform: [{ scale: 1.05 }],
  },
});
