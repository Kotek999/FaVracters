import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { TitleProps } from "../../types";

export const Title = ({ isToday, day }: TitleProps) => {
  return (
    <Text
      style={{
        ...styles.dayText,
        color: isToday ? colors.secondary : colors.textLightGray,
      }}
    >
      Dzień {day}
    </Text>
  );
};

const styles = StyleSheet.create({
  dayText: {
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
  },
});
