import React from "react";
import { StyleSheet, View } from "react-native";
import { Today } from "../day/Today";
import { CheckmarkIcon } from "../day/CheckmarkIcon";
import { RewardItem } from "../day/RewardItem";
import { Title } from "../day/Title";
import { DayItemProps } from "../../types";

export const Item = ({
  day,
  reward,
  isClaimed,
  isToday,
  isFuture,
}: DayItemProps) => {
  return (
    <>
      <View style={styles.container}>
        <Title day={day} isToday={isToday} />
      </View>
      <RewardItem reward={reward} />
      <Today isToday={isToday} isFuture={isFuture} />
      <CheckmarkIcon isClaimed={isClaimed} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
