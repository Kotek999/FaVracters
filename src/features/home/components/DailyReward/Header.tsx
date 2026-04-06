import { Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";

export const Header = ({ isReady }: { isReady: boolean }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.dailyRewardTitleText}>Dzienna nagroda</Text>
        <View style={styles.badgeContainer}>
          {!isReady ? (
            <Text style={styles.badgeText}>Nieaktywna</Text>
          ) : (
            <Text style={styles.badgeText}>Aktywna</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dailyRewardTitleText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  badgeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundDarkGreen,
  },
  badgeText: {
    color: colors.primary,
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 0.8,
    fontFamily: fonts.semibold,
  },
});
