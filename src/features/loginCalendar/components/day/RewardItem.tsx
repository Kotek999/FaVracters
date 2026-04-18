import React from "react";
import { StyleSheet, View } from "react-native";
import { screenHeight, screenWidth } from "@/utils/dimensions";
import { LoginReward } from "@/features/user/types";
import { Reward } from "../day/Reward";
import { colors } from "@/theme/colors";

export const RewardItem = ({ reward }: { reward: LoginReward }) => {
  return (
    <View style={styles.container}>
      <Reward type="cases" reward={reward} iconName="treasure-chest" />
      <Reward type="energy" reward={reward} iconName="lightning-bolt" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 6,
    height: screenHeight / 14,
    backgroundColor: colors.backgroundDarkGreen,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 2,
    borderWidth: 1.5,
    borderColor: colors.borderSecondary,
  },
});
