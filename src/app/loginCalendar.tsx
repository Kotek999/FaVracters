import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect } from "react";
import { LOGIN_REWARDS } from "@/systems/progression/loginRewards";
import { useCountdown } from "@/systems/time/useCountdown";
import { formatTime } from "@/systems/time/formatTime";
import { Time } from "@/systems/time/consts";
import { useUserStore } from "@/features/user/store/useUserStore";
import { LoginReward } from "@/features/user/types";

interface RewardDayProps {
  day: number;
  reward: LoginReward;
  isToday: boolean;
  isClaimed: boolean;
}

const RewardDay = memo(
  ({ day, reward, isToday, isClaimed }: RewardDayProps) => {
    return (
      <View
        style={[
          styles.day,
          isToday && styles.today,
          isClaimed && styles.claimed,
        ]}
      >
        <Text style={styles.dayText}>Day {day}</Text>

        {"cases" in reward && (
          <Text style={styles.reward}>📦 {reward.cases}</Text>
        )}

        {"rarity" in reward && <Text style={styles.reward}>⭐ EPIC</Text>}

        {isClaimed && <Text style={styles.check}>✓</Text>}
      </View>
    );
  },
);

export default function LoginCalendar() {
  const {
    lastLoginAt,
    loginStreakDay,
    rewardAvailable,
    claimLoginReward,
    checkLogin,
  } = useUserStore();

  const nextLoginReward = lastLoginAt + Time.DAY;
  const { hours, minutes, seconds, isReady } = useCountdown(nextLoginReward);

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        Daily Login Reward
      </Text>

      <View>
        <Text style={{ color: "lime" }}>Postęp: {loginStreakDay}/7</Text>
      </View>

      <View style={styles.grid}>
        {LOGIN_REWARDS.map((reward, index) => {
          const day = index + 1;

          const isToday = index === loginStreakDay;
          const isClaimed = index < loginStreakDay;

          return (
            <RewardDay
              key={index}
              day={day}
              reward={reward}
              isToday={isToday}
              isClaimed={isClaimed}
            />
          );
        })}
      </View>

      {isReady ? (
        <Text style={{ color: "lime" }}>Możesz odebrać nagrodę!</Text>
      ) : (
        <Text style={{ color: "lime" }}>
          Następna nagroda za: {formatTime(hours, minutes, seconds)}
        </Text>
      )}

      <Button
        title="Odbierz"
        disabled={!rewardAvailable}
        onPress={() => {
          const reward = claimLoginReward();

          if (!reward) return;

          if ("cases" in reward) {
            Alert.alert("Nagroda", `+${reward.cases} skrzynki`);
          }

          if ("rarity" in reward) {
            Alert.alert("Nagroda", "EPIC bohater");
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },

  day: {
    width: 90,
    height: 90,
    borderRadius: 14,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },

  today: {
    borderWidth: 2,
    borderColor: "#FFD700",
  },

  claimed: {
    opacity: 0.4,
  },

  dayText: {
    color: "#aaa",
    fontSize: 12,
  },

  reward: {
    color: "#fff",
    fontSize: 18,
    marginTop: 4,
  },

  check: {
    position: "absolute",
    top: 6,
    right: 6,
    color: "#00ff9d",
  },
});
