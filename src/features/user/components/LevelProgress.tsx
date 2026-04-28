import { StyleSheet, View, Text } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { BlurView } from "expo-blur";
import { formatNumberFull } from "../utils/formatNumberFull";
import { LevelProgressProps } from "../types";

export const LevelProgress = ({ level, xp, xpNeeded }: LevelProgressProps) => {
  const progress = xp / xpNeeded;
  const progressPercent = Math.floor(progress * 100);
  const levelXp = `${formatNumberFull(xp)} / ${formatNumberFull(xpNeeded)} XP`;

  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.levelWithXpContainer}>
          <View style={styles.levelContainer}>
            <Text style={styles.levelTitleText}>Poziom</Text>
            <Text style={styles.levelValueText}>{level}</Text>
          </View>
          <View style={styles.xpContainer}>
            <Text style={styles.levelXpTitleText}>
              Postęp do poziomu {level + 1}
            </Text>
            <Text style={styles.levelXpValueText}>{levelXp}</Text>
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <ProgressBar
              height={14}
              progress={progress}
              colors={[colors.backgroundDarkGreen, colors.secondary]}
            />
          </View>
          <Text style={styles.progressBarPercentText}>{progressPercent}%</Text>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30,
    width: screenWidth,
    paddingHorizontal: 22,
    paddingVertical: 0,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundBlur,
    borderWidth: 1.2,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    paddingHorizontal: 20,
  },
  levelWithXpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  levelContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  levelTitleText: {
    opacity: 0.6,
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.secondary,
    textTransform: "uppercase",
  },
  levelValueText: {
    marginTop: -5,
    textAlign: "center",
    fontSize: 30,
    fontFamily: fonts.semibold,
    color: colors.secondary,
  },
  xpContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  levelXpTitleText: {
    opacity: 0.6,
    fontSize: 13,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
    color: colors.textGray,
  },
  levelXpValueText: {
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1.2,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
  progressBarContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    flex: 1,
  },
  progressBarPercentText: {
    marginTop: -4,
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: colors.textGray,
  },
});
