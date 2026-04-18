import React from "react";
import { StyleSheet, Text } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { TodayProps } from "../../types";

export const Today = ({ isToday, isFuture }: TodayProps) => {
  return (
    <>
      {isToday ? (
        <Entypo name="shuffle" size={18} color={colors.primary} />
      ) : !isFuture ? (
        <Text style={styles.rewardTakenText}>Odebrano</Text>
      ) : (
        <MaterialCommunityIcons name="lock" size={18} color={colors.textGray} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rewardTakenText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.medium,
    textTransform: "uppercase",
    opacity: 0.5,
  },
});
