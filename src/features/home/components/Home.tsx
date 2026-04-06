import { StyleSheet, View } from "react-native";
import { useUserStore } from "@/features/user/store/useUserStore";
import { SafeAreaWithScrollView } from "@/components/layout/SafeAreaWithScrollView";
import { Item as DailyReward } from "./DailyReward/Item";
import { DailyHero } from "./DailyHero";
import { Items as Activities } from "./Activity/Items";
import { Text } from "@ui-kitten/components";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";

export const Home = () => {
  const { dailyRewardAt, activities, claimDailyReward } = useUserStore();

  return (
    <SafeAreaWithScrollView edges={["bottom"]}>
      <DailyReward
        dailyRewardAt={dailyRewardAt}
        claimDailyReward={claimDailyReward}
      />
      <View style={styles.container}>
        <Text style={styles.dailyHeroText}>Bohater dnia</Text>
      </View>
      <DailyHero />
      <Text style={styles.lastActivityText}>Ostatnia aktywność</Text>
      <Activities activities={activities} />
    </SafeAreaWithScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    flexDirection: "row",
  },
  dailyHeroText: {
    marginLeft: 8,
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.bold,
    textTransform: "uppercase",
  },
  lastActivityText: {
    color: colors.white,
    fontFamily: fonts.bold,
    textTransform: "uppercase",
  },
});
