import { Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Button } from "@/components/ui/Button/Button";
import { showToastMessageInfo } from "@/components/ui/utils/showToastMessageInfo";
import { FooterProps } from "../../types";

export const Footer = ({ claimDailyReward, isReady }: FooterProps) => {
  const onPressClaimDailyReward = () => {
    const reward = claimDailyReward();
    if (reward) {
      showToastMessageInfo(
        "Dzienna nagroda",
        "Otrzymano 1 skrzynkę i 10 energii!",
      );
    }
  };

  const rewardReadyText: string = !isReady
    ? "Odebrałeś swój dzienny pakiet, wróć kolejnego dnia."
    : "Odbierz swój dzienny pakiet skrzynki i energii.";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardReadyText}>{rewardReadyText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={isReady ? "Odbierz" : "Wkrótce"}
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
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
  buttonText: {
    color: colors.textDark,
  },
});
