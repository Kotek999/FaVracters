import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { RewardProps } from "../../types";

export const Reward = ({ type, reward, iconName }: RewardProps) => {
  if (!(type in reward)) return null;

  const value = reward[type as keyof typeof reward];

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        color={colors.textGray}
      />
      <Text style={styles.rewardText}> x{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rewardText: {
    color: colors.white,
    fontFamily: fonts.medium,
  },
});
