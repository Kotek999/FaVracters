import { StyleSheet, View } from "react-native";
import { Header } from "./Header";
import { Timer } from "./Timer";
import { Footer } from "./Footer";
import { ContentProps } from "../../types";

export const Content = ({
  isReady,
  hours,
  minutes,
  seconds,
  claimDailyReward,
}: ContentProps) => {
  return (
    <View style={styles.mainContainer}>
      <Header isReady={isReady} />
      <Timer hours={hours} minutes={minutes} seconds={seconds} />
      <Footer isReady={isReady} claimDailyReward={claimDailyReward} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
