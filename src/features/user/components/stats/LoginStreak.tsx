import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { BlurView } from "expo-blur";
import { LOGIN_REWARDS } from "@/systems/progression/loginRewards";
import { formatDays } from "../../utils/formatDays";
import { ProgressLines } from "../ProgressLines";
import { LoginStreakStatsProps } from "../../types";

export const LoginStreak = ({ loginStreakDay }: LoginStreakStatsProps) => {
  return (
    <View style={styles.mainContainer}>
      <BlurView intensity={8} tint="light" style={styles.blurContainer}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="fire"
              size={32}
              color={colors.primary}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText} numberOfLines={1}>
              Logowanie
            </Text>
            <Text style={styles.descriptionText}>
              {formatDays(loginStreakDay)}
            </Text>
          </View>
          <View style={styles.progressContainer}>
            <ProgressLines
              current={loginStreakDay}
              total={LOGIN_REWARDS.length}
            />
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginVertical: 10,
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.borderSecondary,
    backgroundColor: colors.backgroundDarkGreen,
    marginRight: 12,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  titleText: {
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: fonts.semibold,
    textTransform: "uppercase",
    color: colors.textGray,
  },
  descriptionText: {
    fontSize: 19,
    fontFamily: fonts.semibold,
    color: colors.white,
    textTransform: "uppercase",
  },
  progressContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
