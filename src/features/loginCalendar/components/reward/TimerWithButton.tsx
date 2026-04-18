import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCountdown } from "@/systems/time/useCountdown";
import { Time } from "@/systems/time/consts";
import { useUserStore } from "@/features/user/store/useUserStore";
import { Button } from "@/components/ui/Button/Button";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { formatTime } from "@/systems/time/formatTime";
import { useClaimReward } from "../../hooks/useClaimReward";

export const TimerWithButton = () => {
  const { lastLoginAt, loginStreakDay, rewardAvailable } = useUserStore();

  const nextLoginReward = lastLoginAt + Time.DAY;
  const { hours, minutes, seconds, isReady } = useCountdown(nextLoginReward);

  const { onPressClaimDayReward, onPressClaimDayEpicReward } = useClaimReward();

  const onPressClaimReward = () =>
    loginStreakDay === 7
      ? onPressClaimDayEpicReward()
      : onPressClaimDayReward();

  const rewardReadyButtonTitle = isReady
    ? `Odbierz dzień ${loginStreakDay + 1}`
    : "Bonus niedostępny";

  return (
    <View style={styles.mainContainer}>
      {isReady ? (
        <Text style={styles.rewardText}>Możesz odebrać nagrodę!</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.rewardText}>Następna nagroda za:{"  "}</Text>
          <Text style={styles.rewardTimeText}>
            {formatTime(hours, minutes, seconds)}
          </Text>
        </View>
      )}
      <Button
        title={rewardReadyButtonTitle}
        variant="secondary"
        disabled={!rewardAvailable}
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onPressClaimReward}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rewardText: {
    textAlign: "center",
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.semibold,
  },
  rewardTimeText: {
    textAlign: "center",
    fontSize: 16,
    color: colors.secondary,
    fontFamily: fonts.semibold,
    fontVariant: ["tabular-nums"],
  },
  button: {
    width: "90%",
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.7,
    color: colors.textDark,
  },
});
