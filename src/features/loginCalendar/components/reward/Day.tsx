import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { screenWidth } from "@/utils/dimensions";
import { colors } from "@/theme/colors";
import { EpicHeroItem } from "../day/EpicHeroItem";
import { Item as DayItem } from "../day/Item";
import { RewardDayProps } from "../../types";

const numColumns: number = screenWidth < 350 ? 2 : 3;

export const Day = memo(
  ({
    day,
    reward,
    epicHeroReward,
    isToday,
    isClaimed,
    isFuture,
  }: RewardDayProps) => {
    const isEpicReward = day === 7;

    return (
      <View
        style={[
          styles.day,
          isEpicReward && styles.epicReward,
          isToday && styles.today,
          isClaimed && styles.claimed,
          isFuture && styles.future,
        ]}
      >
        {isEpicReward ? (
          <EpicHeroItem
            day={day}
            reward={reward}
            epicHeroReward={epicHeroReward}
            isToday={isToday}
          />
        ) : (
          <DayItem
            day={day}
            reward={reward}
            isToday={isToday}
            isClaimed={isClaimed}
            isFuture={isFuture}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  day: {
    width: numColumns === 3 ? "30%" : "47%",
    aspectRatio: 0.7,
    borderRadius: 10,
    backgroundColor: colors.backgroundDarkBlue,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1.5,
    borderColor: colors.borderSecondary,
  },
  epicReward: {
    marginVertical: 10,
    width: "100%",
    aspectRatio: 2.8,
  },
  today: {
    borderWidth: 1.5,
    borderColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  claimed: {
    opacity: 0.7,
  },
  future: {
    backgroundColor: colors.opacityDark,
    opacity: 0.3,
    borderColor: colors.borderSecondary,
  },
});
