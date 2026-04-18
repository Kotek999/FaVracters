import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LOGIN_REWARDS } from "@/systems/progression/loginRewards";
import { useUserStore } from "@/features/user/store/useUserStore";
import { screenWidth } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";

export const Progress = () => {
  const { loginStreakDay } = useUserStore();

  const progress = loginStreakDay / LOGIN_REWARDS.length;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.progressText}>Twój postęp</Text>
        <Text style={styles.progressText}>
          {loginStreakDay} / {LOGIN_REWARDS.length} dni
        </Text>
      </View>
      <ProgressBar
        height={8}
        progress={progress}
        colors={[colors.backgroundDarkGreen, colors.secondary]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth - 5,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    fontSize: 12,
    textAlign: "center",
    color: colors.textGray,
    fontFamily: fonts.medium,
    textTransform: "uppercase",
  },
});
