import { StyleSheet } from "react-native";
import { Images } from "@/assets/images";
import { screenWidth, screenHeight } from "@/utils/dimensions";
import { useCountdown } from "@/systems/time/useCountdown";
import { ImageWithGradient } from "@/components/layout/ImageWithGradient";
import { Content as DailyRewardContent } from "./Content";
import { colors } from "@/theme/colors";
import { ItemProps } from "@/features/home/types";

export const Item = ({ dailyRewardAt, claimDailyReward }: ItemProps) => {
  const { hours, minutes, seconds, isReady } = useCountdown(dailyRewardAt);

  return (
    <ImageWithGradient
      source={Images.transformersAllCase}
      style={styles.imageContainer}
      gradientColors={[colors.opacityDark, colors.backgroundDarkGreen]}
      gradientStyle={styles.gradientContainer}
    >
      <DailyRewardContent
        isReady={isReady}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        claimDailyReward={claimDailyReward}
      />
    </ImageWithGradient>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth - 33,
    height: screenHeight / 2.6,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.borderPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  gradientContainer: {
    position: "absolute",
    width: screenWidth - 33,
    height: screenHeight / 2.6,
    padding: 20,
    borderRadius: 20,
  },
});
