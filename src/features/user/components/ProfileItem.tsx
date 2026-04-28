import { StyleSheet, View } from "react-native";
import { fonts } from "@/theme/fonts";
import { colors } from "@/theme/colors";
import { useUserStore } from "../store/useUserStore";
import { useCollectionStore } from "@/features/collection/store/useCollectionStore";
import { getPlayerXpNeeded } from "@/systems/progression/playerXp";
import { getStatsData } from "../utils/getStatsData";
import { AvatarItem } from "./AvatarItem";
import { LevelProgress } from "./LevelProgress";
import { PendingCases } from "./PendingCases";
import { Item as StatsItem } from "./stats/Item";

export const ProfileItem = () => {
  const {
    userName,
    pendingCases,
    level,
    xp,
    energy,
    loginStreakDay,
    claimCases,
  } = useUserStore();
  const { ownedCardsCount, highestCardRarity } = useCollectionStore();

  const xpNeeded = getPlayerXpNeeded(level);

  const stats = getStatsData({
    ownedCardsCount: ownedCardsCount,
    style: styles.subValue,
    energy: energy,
  });

  return (
    <View style={styles.mainContainer}>
      <AvatarItem level={level} progress={xp / xpNeeded} userName={userName} />
      <LevelProgress level={level} xp={xp} xpNeeded={xpNeeded} />
      {pendingCases > 0 && (
        <PendingCases pendingCases={pendingCases} claimCases={claimCases} />
      )}
      <StatsItem
        stats={stats}
        highestCardRarity={highestCardRarity}
        loginStreakDay={loginStreakDay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 24,
  },
  subValue: {
    fontSize: 15,
    letterSpacing: 1.5,
    fontFamily: fonts.semibold,
    color: colors.textGray,
  },
});
