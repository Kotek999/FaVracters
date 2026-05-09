import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { screenHeight } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { LinearGradient } from "expo-linear-gradient";
import { DropRarityRowProps } from "../../types";

export const RarityRow = memo(({ item }: DropRarityRowProps) => {
  return (
    <LinearGradient
      colors={[colors.backgroundDarkGreen, colors.backgroundNavDarkGreen]}
      style={styles.cardContainer}
    >
      <View style={styles.topContainer}>
        <View style={[styles.dot, { backgroundColor: item.dotColor }]} />
        <Text style={styles.labelText}>{item.label}</Text>
      </View>
      <Text style={styles.chanceText}>{item.chance}%</Text>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: screenHeight / 12,
    borderRadius: 14,
    backgroundColor: colors.backgroundDarkGreen,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.borderSecondary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    shadowColor: colors.secondary,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
  },
  labelText: {
    letterSpacing: 0.5,
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
    opacity: 0.85,
  },
  chanceText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.bold,
  },
});
