import { StyleSheet, View, Text } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Collection } from "./Collection";
import { LoginStreak } from "./LoginStreak";
import { ItemProps } from "../../types";

export const Item = ({
  stats,
  highestCardRarity,
  loginStreakDay,
}: ItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statsTitleText}>Statystyki Ogólne</Text>
      <Collection stats={stats} highestCardRarity={highestCardRarity} />
      <LoginStreak loginStreakDay={loginStreakDay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    marginTop: 20,
    paddingHorizontal: 22,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  statsTitleText: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: colors.white,
  },
});
