import React from "react";
import { StyleSheet, View } from "react-native";
import { LOGIN_REWARDS } from "@/systems/progression/loginRewards";
import { useUserStore } from "@/features/user/store/useUserStore";
import { screenWidth } from "@/utils/dimensions";
import { Day } from "./Day";
import { getEpicHeroReward } from "../../utils/getEpicHeroReward";

export const Days = () => {
  const { loginStreakDay, dailyEpicReward } = useUserStore();

  return (
    <View style={styles.container}>
      {LOGIN_REWARDS.map((reward, index) => {
        const day = index + 1;

        const isToday = index === loginStreakDay;
        const isClaimed = index < loginStreakDay;
        const isFuture = index > loginStreakDay;

        return (
          <Day
            key={index}
            day={day}
            reward={reward}
            epicHeroReward={getEpicHeroReward(dailyEpicReward)}
            isToday={isToday}
            isClaimed={isClaimed}
            isFuture={isFuture}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: screenWidth - 40,
  },
});
