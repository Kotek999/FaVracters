import React from "react";
import { StyleSheet, View } from "react-native";
import { CASES_LIST } from "@/features/caseOpening/config/cases";
import { colors } from "@/theme/colors";
import { DotsProps } from "../types";

export const Dots = ({ activeIndex }: DotsProps) => {
  return (
    <View style={styles.dots}>
      {CASES_LIST.map((item, index) => (
        <View
          key={item.config.key}
          style={[styles.dot, index === activeIndex && styles.activeDot]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.textLightGray,
  },
  activeDot: {
    width: 18,
    backgroundColor: colors.secondary,
  },
});
