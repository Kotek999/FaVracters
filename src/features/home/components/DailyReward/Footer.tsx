import { Text } from "@ui-kitten/components";
import { StyleSheet, View, Alert } from "react-native";
import { colors } from "@/theme/colors";
import { Button } from "@/components/ui/Button/Button";
import { FooterProps } from "../../types";

export const Footer = ({ claimDailyReward, isReady }: FooterProps) => {
  const onPressClaimDailyReward = () => {
    const reward = claimDailyReward();
    if (reward) {
      Alert.alert("Nagroda dzienna", "Otrzymano 1 skrzynkę i 10 energii!");
    }
  };

  const rewardReadyText: string = !isReady
    ? "Odebrałeś swój codzienny pakiet, wróć kolejnego dnia."
    : "Odbierz swój codzienny pakiet skrzynki i energii.";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardReadyText}>{rewardReadyText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Odbierz"
          variant="primary"
          disabled={!isReady}
          textStyle={styles.buttonText}
          onPress={onPressClaimDailyReward}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  rewardContainer: {
    flex: 1,
    marginRight: 8,
  },
  buttonContainer: {
    flexShrink: 1,
    maxWidth: "50%",
  },
  rewardReadyText: {
    color: colors.textGray,
  },
  buttonText: {
    color: colors.textDark,
  },
});
